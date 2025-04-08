import React, { useState } from "react";

import { GoMute, GoUnmute } from "react-icons/go";

interface MuteButtonProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const MuteButton: React.FC<MuteButtonProps> = ({ videoRef }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <button onClick={toggleMute}>
      {isMuted ? (
        <GoMute size={30} />
      ) : (
        <GoUnmute size={30} />
      )}
    </button>
  );
};

export default MuteButton;