import React from 'react';
import Rewind from '@/assets/icons/rewindButton.svg'
import Forward from '@/assets/icons/forwardButton.svg'
import ControlsButton from './ControlsButton';

interface SeekButtonProps {
  direction: 'back' | 'forward';
  onSeek: (time: number) => void;
  currentTime: number;
}

const SeekButton: React.FC<SeekButtonProps> = ({ direction, onSeek, currentTime }) => (
  <ControlsButton
    className="text-white"
    onClick={() => onSeek(direction === 'back' ? currentTime - 10 : currentTime + 10)}
  >
    {direction === 'back' ? <img src={Rewind.src} /> : <img src={Forward.src} />}
  </ControlsButton>
);

export default SeekButton;
