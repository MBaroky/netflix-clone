import React, { useState, useEffect, useRef } from 'react';

import Audio from '@/assets/icons/audioButton.svg';
import AudioHalf from '@/assets/icons/audioHalfButton.svg';
import Mute from '@/assets/icons/muteButton.svg';
import ControlsButton from './ControlsButton';

interface VolumeButtonProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const VolumeButton: React.FC<VolumeButtonProps> = ({ videoRef }) => {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Sync volume state with video element
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setVolume(video.volume);
    setIsMuted(video.muted);
    const handleVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };
    video.addEventListener('volumechange', handleVolumeChange);
    return () => {
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [videoRef]);

  // Handle slider change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const newVolume = Number(e.target.value);
    video.volume = newVolume;
    if (newVolume === 0) {
      video.muted = true;
    } else {
      video.muted = false;
    }
    setVolume(newVolume);
    setIsMuted(video.muted);
  };

  // Toggle mute
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    // If unmuting and volume is 0, set to 0.5
    if (!video.muted && video.volume === 0) {
      video.volume = 0.5;
      setVolume(0.5);
    }
  };

  return (
    <div
      className="relative flex items-center"
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={-1}
    >
      <ControlsButton
        className="text-white px-4"
        onClick={toggleMute}
        tabIndex={-1}
      >
        {isMuted || volume === 0
          ? <img src={Mute.src} alt="Mute" />
          : volume < 0.5
          ? <img src={AudioHalf.src} alt="Audio Half" />
          : <img src={Audio.src} alt="Audio" />}
      </ControlsButton>
      {hovered && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-0 flex items-center bg-black/80 p-2 rounded shadow-lg z-30 min-w-[80px]">
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-2 accent-white cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default VolumeButton;
