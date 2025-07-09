// components/videoplayer/CustomShakaPlayer.tsx
'use client';

import React, { useEffect, useRef } from 'react';
// Assuming shaka-player.ui.js is now loaded via <script> tag in layout.tsx
// import 'shaka-player/dist/shaka-player.ui.js'; // Can remove if loaded globally
import 'shaka-player/dist/controls.css';

interface CustomShakaPlayerProps {
  src: string;
  adTagUrl?: string;
  poster?: string;
}

const CustomShakaPlayer: React.FC<CustomShakaPlayerProps> = ({ src, adTagUrl, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null); // Ref to store the player instance

  useEffect(() => {
    if (!videoRef.current || !containerRef.current || !window.shaka) {
      console.warn('Shaka Player or elements not ready.');
      return;
    }

    const shaka = window.shaka;
    const videoElement = videoRef.current;
    const containerElement = containerRef.current;

    let playerInstance: shaka.Player | null = null;
    let uiInstance: shaka.ui.Overlay | null = null;

    const initPlayer = async () => {
      try {
        playerInstance = new shaka.Player(videoElement);
        playerRef.current = playerInstance; // Save instance for cleanup

        uiInstance = new shaka.ui.Overlay(playerInstance, containerElement, videoElement);
        uiInstance.getControls(); // Ensure controls are initialized

        playerInstance.addEventListener('error', (event: any) => {
          console.error('Shaka Player Error:', event.detail);
        });

        // Initialize ads if adTagUrl and IMA SDK are available
        if (adTagUrl && window.google) {
          const adManager = playerInstance.getAdManager();
          const adContainer = uiInstance.getControls()?.getClientSideAdContainer();

          if (adContainer) {
            adManager?.initClientSide(adContainer, videoElement, null); // Initialize IMA SDK

            const adsRequest = new window.google.ima.AdsRequest();
            adsRequest.adTagUrl = adTagUrl;

            // Optional: Listen for ads manager loaded event to confirm ad readiness
            // This is how you'd explicitly handle content loading *after* ads are ready
            adManager?.addEventListener(shaka.ads.AdManager.ADS_LOADED, () => {
                console.log('IMA SDK ads loaded. Shaka Player will now manage playback.');
                // At this point, Shaka player's ad manager is in control.
                // It will load the main content after pre-rolls.
            });

            try {
              // Request ads. Shaka's AdManager, integrated with IMA,
              // will take over loading the content *after* ads if successful.
              await adManager?.requestClientSideAds(adsRequest);
              console.log('Ads requested successfully. Waiting for ad playback and content.');

              // IMPORTANT: Do NOT call playerInstance.load(src) here immediately after successful ad request.
              // The AdManager is responsible for loading the content once ads are done.
              // We'll let the initial player.load call handle the first content load attempt.

            } catch (adError: any) {
              console.warn('Ads request failed (or no ads found for the tag):', adError);
              // If ads fail to load, or there are no ads for the tag, then directly load content.
              await playerInstance.load(src);
              console.log('Ads failed or no ads, loaded main content directly.');
            }
          } else {
            console.warn('Ad container not found. Loading main content directly.');
            await playerInstance.load(src);
          }
        } else {
          console.log('No ads configured or IMA SDK not loaded. Loading main content directly.');
          await playerInstance.load(src);
        }

        // --- NEW STRATEGY ---
        // Instead of conditionally calling player.load(src) in multiple places
        // based on ad success/failure, let the ad manager *intercept* an initial load.
        // Call load here once, and if ads are configured, the AdManager
        // will manage the pre-roll and then the main content.
        // If no ads, it just loads the content.
        // This is a common pattern documented by Shaka Player for IMA.
        await playerInstance.load(src).catch((error: any) => {
          console.error('Error loading video source:', error);
        });
        console.log('Attempted to load content (or ads first if configured).');


      } catch (error: any) {
        console.error('Error initializing Shaka Player or content/ad process:', error);
      }
    };

    initPlayer();

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [src, adTagUrl]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <video
        ref={videoRef}
        poster={poster}
        className="w-full h-full"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        autoPlay
      />
    </div>
  );
};

export default CustomShakaPlayer;