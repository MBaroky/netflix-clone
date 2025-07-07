import React from 'react';
import PlayIcon from '@/assets/icons/playButton.svg'
import PauseIcon from '@/assets/icons/pauseButton.svg'
import ControlsButton from './ControlsButton';


interface PlayPauseButtonProps {
  isPlaying: boolean;
  onPlayPause: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ isPlaying, onPlayPause }) => (
  <ControlsButton  onClick={onPlayPause}>
    {isPlaying ? <img src={PauseIcon.src} /> : <img src={PlayIcon.src} />}
  </ControlsButton>
);

export default PlayPauseButton;
