"use client";
import React, { useRef, useEffect } from 'react';
import DropUp from './DropUp';

interface VideoControlsProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onSeek: (time: number) => void;
  playerRef?: React.RefObject<any>; // Add playerRef as optional
  showSettings?: boolean;
  onToggleSettings?: () => void;
  onFullscreen?: () => void; // Add fullscreen handler
  navVisible?: boolean; // Add navVisible for auto hide
  // Add more props as needed for state and handlers
}

const VideoControls: React.FC<VideoControlsProps> = ({ videoRef, isPlaying, currentTime, duration, onPlayPause, onSeek, playerRef, showSettings, onToggleSettings, onFullscreen, navVisible }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col transition-opacity duration-300 ${navVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Progress bar with draggable seeker */}
      <div className="flex items-center mb-2 relative">
        <span className="text-white text-xs">{new Date(currentTime * 1000).toISOString().substr(11, 8)}</span>
        <div className="flex-1 h-1 bg-gray-400 rounded overflow-hidden relative mx-2">
          <div className="h-full bg-white" style={{ width: `${(currentTime / duration) * 100}%` }} />
          {/* Seeker slider */}
          <input
            type="range"
            min={0}
            max={isNaN(duration) || duration === 0 ? 1 : duration}
            step={0.01}
            value={isNaN(currentTime) ? 0 : currentTime}
            onChange={e => onSeek(Number(e.target.value))}
            className="absolute top-0 left-0 w-full h-1 opacity-0 cursor-pointer"
            style={{ WebkitAppearance: 'none', appearance: 'none' }}
          />
        </div>
        <span className="text-white text-xs">{new Date((duration - currentTime) * 1000).toISOString().substr(11, 8)}</span>
      </div>
      {/* Controls row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-bold">Stranger Things.S1.E10</span>
          <span className="text-white text-xs">● Episodes</span>
          <span className="text-white text-xs">Season 1 ▲</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Replace with icons and handlers */}
          <button className="text-white" onClick={() => onSeek(currentTime - 10)}>⏪</button>
          <button className="text-white" onClick={onPlayPause}>{isPlaying ? '⏸️' : '▶️'}</button>
          <button className="text-white" onClick={() => onSeek(currentTime + 10)}>⏩</button>
          <button className="text-white">🔊</button>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-white">Next Episode</button>
          <button className="text-white">⭐</button>
          <button className="text-white">💬</button>
          <DropUp
            trigger={<button className="text-white">⚙️</button>}
            className="inline-block"
          >
            <div id='controls' className="bg-gray-700 bg-opacity-80 rounded-lg p-4 flex flex-col gap-2 min-w-[250px]">
              <div className="flex items-center justify-between text-white">
                <span>Quality</span>
                <span>1080p</span>
                <span>▶</span>
              </div>
              <div className="flex items-center justify-between text-white">
                <span>Subtitles</span>
                <span>Arabic</span>
                <span>On</span>
                <span>▶</span>
              </div>
              <div className="flex items-center justify-between text-white">
                <span>Audio</span>
                <span>English</span>
                <span>▶</span>
              </div>
            </div>
          </DropUp>
          <button className="text-white ml-2" onClick={onFullscreen}>
            ⛶
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoControls;
