import React from 'react';

interface SeekButtonProps {
  direction: 'back' | 'forward';
  onSeek: (time: number) => void;
  currentTime: number;
}

const SeekButton: React.FC<SeekButtonProps> = ({ direction, onSeek, currentTime }) => (
  <button
    className="text-white"
    onClick={() => onSeek(direction === 'back' ? currentTime - 10 : currentTime + 10)}
  >
    {direction === 'back' ? '⏪' : '⏩'}
  </button>
);

export default SeekButton;
