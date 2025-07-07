// components/ShakaPlayer.tsx
import React, { useRef, useEffect, useState } from 'react';
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
  const [showSettings, setShowSettings] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const player = new shaka.Player(videoElement);
      playerRef.current = player;

      player.load(manifestUri)
        .then(() => {
          console.log('The video has now been loaded!');
        })
        .catch((error: unknown) => {
          if (error instanceof Error) {
            console.error('Error loading manifest:', error.message, error.stack);
          } else {
            console.error('Error loading manifest:', error);
          }
        });

      // Add event listeners
      const handleTimeUpdate = () => setCurrentTime(videoElement.currentTime);
      const handleDurationChange = () => setDuration(videoElement.duration);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      videoElement.addEventListener('durationchange', handleDurationChange);
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);

      return () => {
        if (playerRef.current) {
          playerRef.current.destroy();
          playerRef.current = null;
        }
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        videoElement.removeEventListener('durationchange', handleDurationChange);
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
      };
    }
  }, [manifestUri]);

  // Play/pause handler
  const onPlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Seek handler
  const onSeek = (time: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(time, duration || 0));
  };

  // Helper for double click jump and fullscreen
  const handleVideoDoubleClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    if (x < width * 0.25) {
      // Left quarter: rewind 10s
      onSeek(currentTime - 10);
    } else if (x > width * 0.75) {
      // Right quarter: forward 10s
      onSeek(currentTime + 10);
    } else {
      // Center: toggle fullscreen
      handleFullscreen();
    }
  };

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

  // Example usage of playerRef in VideoControls:
  // You can use playerRef.current to access the shaka.Player instance for advanced controls.
  // For example, you could add a button to change quality, get stats, etc.
  // Example (inside VideoControls):
  // if (playerRef && playerRef.current) {
  //   playerRef.current.someShakaMethod();
  // }

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
        onClick={onPlayPause}
        onDoubleClick={handleVideoDoubleClick}
      />
      <VideoControls
        videoRef={videoRef as React.RefObject<HTMLVideoElement>}
        isPlaying={isPlaying}
        currentTime={isNaN(currentTime) ? 0 : currentTime}
        duration={isNaN(duration) ? 0 : duration}
        onPlayPause={onPlayPause}
        onSeek={onSeek}
        showSettings={showSettings}
        onToggleSettings={() => setShowSettings((prev) => !prev)}
        playerRef={playerRef}
        onFullscreen={handleFullscreen}
        navVisible={navVisible}
      />
    </div>
  );
};

export default ShakaPlayer;