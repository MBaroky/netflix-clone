import React from 'react';
import Icon from '@/assets/icons/captionButton.svg';
import ControlsButton from './ControlsButton';

const CaptionButton: React.FC = () => (
  <ControlsButton>

    <img src={Icon.src} alt="Caption" />
  </ControlsButton>
);

export default CaptionButton;
