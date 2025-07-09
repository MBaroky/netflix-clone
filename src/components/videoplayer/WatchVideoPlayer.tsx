"use client";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

// Components
import Loader from "@/components/Loader";

// Hooks
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import { useAutoHide } from '@/hooks/useAutoHide';

import dynamic from 'next/dynamic';
import React from 'react';

const ShakaPlayerComponent = dynamic(() => import('@/components/videoplayer/ShakaPlayer'), {
// const ShakaPlayerComponent = dynamic(() => import('@/components/videoplayer/CustomShakaPlayer'), {
  ssr: false, // This is crucial for client-side only rendering
});

interface WatchVideoPlayerProps {
    movieId: string;
}

const WatchVideoPlayer:React.FC<WatchVideoPlayerProps> = ({movieId}) => {
    const { data, isLoading } = useMovie(movieId)
    const router = useRouter();
    const [navVisible, playerAreaRef] = useAutoHide(2000);

  var imaOptions = {
    adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator=1'
  };

    if(isLoading) {
        return (
            <div className='h-screen w-screen bg-black flex items-center justify-center'>
                <Loader />
            </div>
        )
    }
    return (
      <div ref={playerAreaRef} className='h-screen w-screen bg-black relative'>
          <nav className={`fixed w-full z-10 p-4 bg-black bg-opacity-70 flex flex-row items-center gap-8 transition-opacity duration-300 ${navVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
          {/* <ShakaPlayerComponent src={data.videoUrl} adTagUrl={imaOptions.adTagUrl} /> */}
          <ShakaPlayerComponent manifestUri={data.videoUrl}  />
          {/* <video
            autoPlay
            controls
            src={data.videoUrl}
            className='h-full w-full'></video> */}
        </div>
    )
  }

  export default WatchVideoPlayer;