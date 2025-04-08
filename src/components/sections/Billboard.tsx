"use client"
import useBillboard from '@/hooks/useBillboard'
import React from 'react'

import {AiOutlineInfoCircle} from 'react-icons/ai'
import MuteButton from '@/components/videoplayer/MuteButton'

const Billboard = () => {
const {data} = useBillboard();
const videRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div className='relative h-[56.25vw]'>
        <video
        ref={videRef}
        autoPlay
        muted
        loop

        className='w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500'
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}>

        </video>
        <div className=''>
          <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
            <p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>{data?.title}</p>
            <p className='text-white text-[8px] md:text-lg mt-2 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>{data?.description}</p>
            <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
              <button className='bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'>
                <AiOutlineInfoCircle className='text-white mr-2' size={20}/>
                More Info
              </button>
            </div>
          </div>
          <div className="md:absolute top-full -translate-y-full p-4 md:p-16 w-full flex flex-col justify-end items-end text-white">

          {/* Mute button */}
            <div className='rounded-full border-neutral-100 border transition hover:opacity-60 bg-black bg-opacity-30 opacity-30 p-2 md:p-4 flex items-center justify-center'>
              <MuteButton videoRef={videRef} />
            </div>
          </div>

        </div>

    </div>
  )
}

export default Billboard