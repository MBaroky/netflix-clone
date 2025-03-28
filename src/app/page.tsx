import LogoutButton from "@/components/LogoutButton";
import UserWelcome from "@/components/UserWelcome";
import VideoPlayer from "@/components/VideoPlayer";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

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
      {session && (
        <>
          <div className="text-center ">
            <h2 className="text-red-700 text-4xl">Netflix clone</h2>
            <UserWelcome />
            <LogoutButton />
          </div>
          {/* <VideoPlayer options={videoJsOptions} onReady={handleReady} /> */}
        </>
      )}
    </div>
  );
}
