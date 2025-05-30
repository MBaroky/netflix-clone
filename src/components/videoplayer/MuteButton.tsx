import React, {  useEffect, useState } from "react";

// Utils
import { LocalStorageKeys } from "@/utils/constants";

// Icons
import { GoMute, GoUnmute } from "react-icons/go";

// Hooks
import { useLocalStorage } from "usehooks-ts";

interface MuteButtonProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const MuteButton: React.FC<MuteButtonProps> = ({ videoRef }) => {


  const [muted, setMuted] = useLocalStorage(LocalStorageKeys.MUTED, true);

  const [isMuted, setIsMuted] = useState<boolean>(muted !== null ? muted : false);
  useEffect(() => {

    if (videoRef.current) {

      videoRef.current.muted = isMuted
    }
  },[videoRef, isMuted])
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setMuted(!isMuted);
    }
  };

  return (
    <div  onClick={toggleMute} className="rounded-full border-neutral-100 border transition hover:opacity-60 bg-black bg-opacity-30 opacity-30 p-2 md:p-4 flex items-center justify-center cursor-pointer">

    <button>
      {isMuted ? (
        <GoUnmute size={30} />
      ) : (
        <GoMute size={30} />
      )}
    </button>
    </div>
  );
};

export default MuteButton;