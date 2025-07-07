import React from 'react';
import Icon from '@/assets/icons/fullScreenButton.svg';
import ControlsButton from './ControlsButton';

interface FullscreenButtonProps {
  onFullscreen: () => void;
}

const FullscreenButton: React.FC<FullscreenButtonProps> = ({ onFullscreen }) => (
  <ControlsButton className="text-white ml-2" onClick={onFullscreen}>
    <img src={Icon.src} alt="Fullscreen" />
  </ControlsButton>
);

export default FullscreenButton;
