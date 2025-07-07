import React from 'react';

interface FullscreenButtonProps {
  onFullscreen: () => void;
}

const FullscreenButton: React.FC<FullscreenButtonProps> = ({ onFullscreen }) => (
  <button className="text-white ml-2" onClick={onFullscreen}>
    ⛶
  </button>
);

export default FullscreenButton;
