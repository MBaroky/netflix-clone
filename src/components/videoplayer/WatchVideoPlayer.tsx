"use client";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

// Components
import Loader from "@/components/Loader";

// Hooks
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";

interface WatchVideoPlayerProps {
    movieId: string;
}

const WatchVideoPlayer:React.FC<WatchVideoPlayerProps> = ({movieId}) => {
    const { data, isLoading } = useMovie(movieId)
    const router = useRouter();

    if(isLoading) {
        return (
            <div className='h-screen w-screen bg-black flex items-center justify-center'>
                <Loader />
            </div>
        )
    }
    return (
      <div className='h-screen w-screen bg-black'>
          <nav className='fixed w-full z-10 p-4 bg-black bg-opacity-70 flex flex-row items-center gap-8'>
            <AiOutlineArrowLeft
              className='text-white cursor-pointer'
              size={30}
              onClick={() => router.back()}
            />
            <p className='text-white text-1xl md:text-3xl font-bold'>
              <span className='font-light'>Watching: </span>
              {data.title}
            </p>
          </nav>

          <video
            autoPlay
            controls
            src={data.videoUrl}
            className='h-full w-full'></video>
        </div>
    )

  }

  export default WatchVideoPlayer;