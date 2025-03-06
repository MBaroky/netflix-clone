"use client";
import { useEffect, useRef, useState } from "react";

import videojs from "video.js";
import "video.js/dist/video-js.css";
import SpeedControl from "./SpeedControl";
import 'videojs-contrib-ads';
import 'videojs-ima';
import Player from "video.js/dist/types/player";
import 'videojs-contrib-ads';
import 'videojs-ima';


type VideoPlayerOptions = {
  autoplay: boolean;
  controls: boolean;
  responsive: boolean;
  fluid: boolean;
  experimentalSvgIcons: boolean;
  playbackRates: number[];
  sources: { src: string; type: string }[];
};
type VideoPlayerProps = {
  options: VideoPlayerOptions;
  onReady?: () => void;
};

export const VideoPlayer = (props :VideoPlayerProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const { options, onReady } = props;
  const [playbackRate, setPlaybackRate] = useState(1);

  var imaOptions = {
    adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator=1'
  };


  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player:Player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady();
      }));
    } else {
      const player:Player | null = playerRef.current;

      if (player) {
        player.autoplay(options.autoplay);
        player.src(options.sources);
        (player as any).ima(imaOptions);
      }
    }
  }, [options, videoRef]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.playbackRate(playbackRate);
    }
  }, [playbackRate]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <>

    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <SpeedControl onChange={(value: number) => setPlaybackRate(value)} />
      </div>
    </>
  );
};

export default VideoPlayer;
