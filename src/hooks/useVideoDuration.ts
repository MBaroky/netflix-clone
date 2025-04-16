import { useEffect } from "react";

interface VideoDurationProps {
    videoRef: React.RefObject<HTMLVideoElement | null>;

  startTime: number;
  stopTime: number;
}

const useVideoDuration = ({videoRef, startTime, stopTime}:VideoDurationProps) => {

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Set the video to start from the specified time on load
    video.addEventListener("loadedmetadata", () => {
      video.currentTime = startTime;
      console.log("Video loaded and set to start time:", startTime);
    });

    // Pause at the stop time and loop back to the start time
    const handleTimeUpdate = () => {
      if (video.currentTime >= stopTime) {
        video.currentTime = startTime; // Reset to start time
        video.play(); // Automatically replay
      }
      // console.log("Current time:", video.currentTime);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [startTime, stopTime]);
}

export default useVideoDuration;