import React from 'react';
import Icon from '@/assets/icons/nextButton.svg';
import ControlsButton from './ControlsButton';

const NextEpisodeButton: React.FC = () => (
  <ControlsButton className="text-white flex justify-center items-center gap-2">
    <img src={Icon.src} alt="Next Episode" />
    Next Episode
  </ControlsButton>
);

export default NextEpisodeButton;
