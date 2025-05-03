import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { env } from "process";

// Components
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieCard/MovieList";
import Navbar from "@/components/navbar/Navbar";
import Billboard from "@/components/sections/BillBoard";
import VideoPlayer from "@/components/videoplayer/VideoPlayer";

// Hooks
import useFavorites from "@/hooks/useFavorites";
import useMovieList from "@/hooks/useMovieList";

// lib
import { authOptions } from "@/lib/authOptions";



export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(env.NEXTAUTH_LOGIN_URL || "/login");
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
        <InfoModal />
          <Navbar />
            <Billboard />
          <div className="pb-40">

            <MovieList title="Trending" hook={useMovieList} />
            <MovieList title="My List" hook={useFavorites} />
          </div>
          {/* <VideoPlayer options={videoJsOptions} onReady={handleReady} /> */}
        </>
      )}
    </div>
  );
}
