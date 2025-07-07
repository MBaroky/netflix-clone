"use client";
import React, { useRef, useEffect, useState } from 'react';
import DropUp from './DropUp';
import PlayPauseButton from '../controls/PlayPauseButton';
import SeekButton from '../controls/SeekButton';
import FullscreenButton from '../controls/FullscreenButton';
import SeekBar from '../controls/SeekBar';
import VolumeButton from '../controls/VolumeButton';
import NextEpisodeButton from '../controls/NextEpisodeButton';
import StarButton from '../controls/StarButton';
import CommentButton from '../controls/CommentButton';
import TitleInfo from '../controls/TitleInfo';
import SettingsDropUp from '../controls/SettingsDropUp';
import { formatTime } from '@/utils/formatTime';

interface VideoControlsProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  playerRef?: React.RefObject<any>; // Add playerRef as optional
  onFullscreen?: () => void; // Add fullscreen handler
  navVisible?: boolean; // Add navVisible for auto hide
  // No playback props needed, handled internally
}

const VideoControls: React.FC<VideoControlsProps> = ({ videoRef, playerRef, onFullscreen, navVisible }) => {
  const seekerRef = useRef<HTMLInputElement>(null);
  const controlsAreaRef = useRef<HTMLDivElement>(null);
  const [isHoveringControls, setIsHoveringControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Setup video event listeners for playback state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleVideoEvents = (e: Event) => {
      switch (e.type) {
        case 'timeupdate': setCurrentTime(video.currentTime); break;
        case 'durationchange': setDuration(video.duration); break;
        case 'play': setIsPlaying(true); break;
        case 'pause': setIsPlaying(false); break;
      }
    };
    const events = ['timeupdate', 'durationchange', 'play', 'pause'];
    events.forEach(event => video.addEventListener(event, handleVideoEvents));
    return () => {
      events.forEach(event => video.removeEventListener(event, handleVideoEvents));
    };
  }, [videoRef]);

  // Play/pause handler for button only
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

  // Prevent auto-hide when hovering controls
  useEffect(() => {
    if (!controlsAreaRef.current) return;
    const handleMouseEnter = () => setIsHoveringControls(true);
    const handleMouseLeave = () => setIsHoveringControls(false);
    const el = controlsAreaRef.current;
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // If hovering controls, always show nav
  const visible = navVisible || isHoveringControls;

  return (
    <div
      ref={controlsAreaRef}
      className={`video-controls-ui absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      {/* Progress bar with draggable seeker */}
      <SeekBar currentTime={currentTime} duration={duration} onSeek={onSeek} />
      {/* Controls row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TitleInfo />
        </div>
        <div className="flex items-center gap-4">
          <SeekButton direction="back" onSeek={onSeek} currentTime={currentTime} />
          <PlayPauseButton isPlaying={isPlaying} onPlayPause={onPlayPause} />
          <SeekButton direction="forward" onSeek={onSeek} currentTime={currentTime} />
          <VolumeButton videoRef={videoRef} />
        </div>
        <div className="flex items-center gap-2">
          <NextEpisodeButton />
          <StarButton />
          <CommentButton />
          <SettingsDropUp />
          <FullscreenButton onFullscreen={onFullscreen!} />
        </div>
      </div>
    </div>
  );
};

export default VideoControls;
