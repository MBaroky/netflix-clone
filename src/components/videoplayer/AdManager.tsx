import React, { useEffect, useRef, useState } from 'react';

interface AdManagerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  adTagUrl: string;
  trigger: 'preroll' | 'midroll';
  midrollTime?: number; // seconds
  onAdStart?: () => void;
  onAdEnd?: () => void;
}

const AdManager: React.FC<AdManagerProps> = ({
  videoRef,
  containerRef,
  adTagUrl,
  trigger,
  midrollTime = 10,
  onAdStart,
  onAdEnd,
}) => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [adPlaying, setAdPlaying] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const [midrollPlayed, setMidrollPlayed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let adStarted = false;
    let timeListener: any = null;

    function playAds() {
      // @ts-ignore
      if (!window.google || !window.google.ima) return;
      if (!adContainerRef.current || !videoRef.current) return;
      // @ts-ignore
      const adDisplayContainer = new window.google.ima.AdDisplayContainer(adContainerRef.current, videoRef.current);
      adDisplayContainer.initialize();
      // @ts-ignore
      const adsLoader = new window.google.ima.AdsLoader(adDisplayContainer);
      // @ts-ignore
      adsLoader.addEventListener(
        window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        (adsManagerLoadedEvent: any) => {
          // @ts-ignore
          const adsManager = adsManagerLoadedEvent.getAdsManager(videoRef.current);
          // @ts-ignore
          adsManager.addEventListener(window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, () => {
            setAdPlaying(false);
            setAdLoaded(true);
            if (onAdEnd) onAdEnd();
            if (videoRef.current) videoRef.current.play();
          });
          // @ts-ignore
          adsManager.addEventListener(window.google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => {
            setAdPlaying(true);
            if (onAdStart) onAdStart();
            if (videoRef.current) videoRef.current.pause();
          });
          try {
            if (containerRef.current) {
              // @ts-ignore
              adsManager.init(containerRef.current.offsetWidth, containerRef.current.offsetHeight, window.google.ima.ViewMode.NORMAL);
              adsManager.start();
            }
          } catch (adError) {
            setAdPlaying(false);
            setAdLoaded(true);
            if (onAdEnd) onAdEnd();
            if (videoRef.current) videoRef.current.play();
          }
        }
      );
      // @ts-ignore
      adsLoader.addEventListener(
        // @ts-ignore
        window.google.ima.AdErrorEvent.Type.AD_ERROR,
        () => {
          setAdPlaying(false);
          setAdLoaded(true);
          if (onAdEnd) onAdEnd();
          if (videoRef.current) videoRef.current.play();
        }
      );
      // @ts-ignore
      const adRequest = new window.google.ima.AdsRequest();
      adRequest.adTagUrl = adTagUrl;
      if (containerRef.current) {
        // @ts-ignore
        adRequest.linearAdSlotWidth = containerRef.current.offsetWidth;
        // @ts-ignore
        adRequest.linearAdSlotHeight = containerRef.current.offsetHeight;
        // @ts-ignore
        adRequest.nonLinearAdSlotWidth = containerRef.current.offsetWidth;
        // @ts-ignore
        adRequest.nonLinearAdSlotHeight = containerRef.current.offsetHeight / 3;
      }
      adsLoader.requestAds(adRequest);
    }

    if (trigger === 'preroll') {
      const onFirstPlay = () => {
        if (!adStarted) {
          playAds();
          adStarted = true;
        }
        video.removeEventListener('play', onFirstPlay);
      };
      video.addEventListener('play', onFirstPlay);
      return () => video.removeEventListener('play', onFirstPlay);
    }

    if (trigger === 'midroll') {
      timeListener = () => {
        if (!midrollPlayed && video.currentTime >= midrollTime) {
          setMidrollPlayed(true);
          playAds();
        }
      };
      video.addEventListener('timeupdate', timeListener);
      return () => video.removeEventListener('timeupdate', timeListener);
    }
  }, [trigger, adTagUrl, midrollTime, videoRef, containerRef, onAdStart, onAdEnd, midrollPlayed]);

  return (
    <div
      ref={adContainerRef}
      className={`absolute inset-0 z-30 flex items-center justify-center${adPlaying ? '' : ' pointer-events-none'}`}
      style={{ background: adPlaying ? 'black' : 'transparent' }}
    />
  );
};

export default AdManager;
