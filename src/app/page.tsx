"use client";
import LogoutButton from "@/components/LogoutButton";
import VideoPlayer from "@/components/VideoPlayer";
import useAuthRedirect  from "@/hooks/useAuthRedirect";

export default function Home() {
  useAuthRedirect();
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    experimentalSvgIcons: true,

    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };
  const handleReady = () => {
    console.log("Player is ready");
  };
  return (
    <div>
      <div className="text-center text-red-700 text-4xl">
        <h2>Netflix clone</h2>
        <LogoutButton />
      </div>
      {/* <VideoPlayer options={videoJsOptions} onReady={handleReady} /> */}
    </div>
  );
}
