import React, { useCallback } from 'react';
import { formatTime } from '@/utils/formatTime';
import { useDebounceCallback } from 'usehooks-ts';

interface SeekBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

const SeekBar: React.FC<SeekBarProps> = ({ currentTime, duration, onSeek }) => {
  // Debounce the seek handler for smoother scrubbing
  const debouncedSeek = useDebounceCallback(onSeek, 100);

  return (
    <div className="flex items-center mb-2 relative">
      <span className="text-white text-xs">{formatTime(currentTime)}</span>
      <div className="flex-1 h-1 hover:h-2 transition duration-200 bg-gray-400 rounded overflow-hidden relative mx-2">
        <div className="h-full bg-white rounded-r" style={{ width: `${(currentTime / duration) * 100}%` }} />
        <input
          type="range"
          min={0}
          max={isNaN(duration) || duration === 0 ? 1 : duration}
          step={0.01}
          value={isNaN(currentTime) ? 0 : currentTime}
          onChange={e => debouncedSeek(Number(e.target.value))}
          className="absolute top-0 left-0 w-full h-4 opacity-0 cursor-pointer z-20"
          style={{ WebkitAppearance: 'none', appearance: 'none' }}
        />
      </div>
      <span className="text-white text-xs">{formatTime(duration - currentTime)}</span>
    </div>
  );
};

export default SeekBar;
