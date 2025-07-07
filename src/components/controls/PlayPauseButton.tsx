import React from 'react';

interface PlayPauseButtonProps {
  isPlaying: boolean;
  onPlayPause: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ isPlaying, onPlayPause }) => (
  <button className="text-white" onClick={onPlayPause}>
    {isPlaying ? '⏸️' : '▶️'}
  </button>
);

export default PlayPauseButton;
