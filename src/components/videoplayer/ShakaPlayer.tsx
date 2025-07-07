// components/ShakaPlayer.tsx
import React, { useRef, useEffect } from 'react';
// @ts-ignore
import shaka = require('shaka-player');
import VideoControls from './VideoControls';
import { useAutoHide } from '@/hooks/useAutoHide';

interface ShakaPlayerProps {
  manifestUri: string;
}

const ShakaPlayer: React.FC<ShakaPlayerProps> = ({ manifestUri }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<shaka.Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Add container ref
  const [navVisible, playerAreaRef] = useAutoHide(2000); // Use auto hide

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    const player = new shaka.Player(videoElement);
    playerRef.current = player;

    player.load(manifestUri)
      .then(() => console.log('The video has now been loaded!'))
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error('Error loading manifest:', error.message, error.stack);
        } else {
          console.error('Error loading manifest:', error);
        }
      });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [manifestUri]);

  // Fullscreen handler for the whole player
  const handleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  };

  // Play/pause handler for video element
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Double click handler for seek/fullscreen
  const handleVideoDoubleClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = video.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    if (x < width * 0.25) {
      video.currentTime = Math.max(0, video.currentTime - 10);
    } else if (x > width * 0.75) {
      video.currentTime = Math.min(video.duration, video.currentTime + 10);
    } else {
      handleFullscreen();
    }
  };

  return (
    <div
      ref={el => {
        containerRef.current = el;
        if (playerAreaRef) (playerAreaRef as any).current = el;
      }}
      className={`relative h-full w-full${navVisible ? '' : ' cursor-none'}`}
    >
      <video
        ref={videoRef}
        className='h-full w-full'
        autoPlay
        style={{ width: '100%' }}
        onClick={handlePlayPause}
        onDoubleClick={handleVideoDoubleClick}
      />
      <VideoControls
        videoRef={videoRef as React.RefObject<HTMLVideoElement>}
        playerRef={playerRef}
        onFullscreen={handleFullscreen}
        navVisible={navVisible}
      />
    </div>
  );
};

export default ShakaPlayer;