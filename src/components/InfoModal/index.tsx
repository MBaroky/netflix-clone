"use client"

import useInfoModal from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import PlayButton from '../PlayButton';
import FavoriteButton from '../FavoriteButton';
import InfoModalSkeleton from './skeleton';

// interface InfoModalProps {
//     visible: boolean;
//     beforeClose: any;
// }

const InfoModal = ({

}) => {
    const {movieId, isOpen:visible, closeModal:beforeClose} = useInfoModal()
    const [isVisible, setIsVisible] = useState(!!visible);
    const {data, isLoading}:{data:Movie, isLoading:boolean} = useMovie(movieId);
    useEffect(() => {
        setIsVisible(!!visible);
    },[visible])
    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(()=>{
            beforeClose();
        },300)
    },[beforeClose])
    if(!visible) {
        return null;
    }
    const closeBlackArea = (e:React.MouseEvent) =>{
        if(e.target === e?.currentTarget){
            handleClose();
        }
    }
    if(isLoading){
        return (
            <InfoModalSkeleton />
        )
    }
  return (
    <div onClick={closeBlackArea} className='
        z-50
        transition duration-300
        bg-black
        bg-opacity-80
        w-full
        h-full
        fixed
        top-0
        left-0
        flex
        justify-center
        items-center
        overflow-y-auto
        overflow-x-hidden
        inset-0
    '>
        <div className='
            relative
            w-auto
            mx-auto
            max-w-3xl
            rounded-md
            overflow-hidden
            '>
            <div className={`
                    ${isVisible? 'scale-100': 'scale-0'}
                    transform
                    duration-300
                    relative
                    flex-auto
                    bg-zinc-900
                    drop-shadow-md
                `}>
                <div className='relative h-96'>
                    <video
                    autoPlay
                    muted
                    loop
                    className='w-full h-full brightness-[60%] object-cover'
                    src={data?.videoUrl}
                    poster={data?.thumbnailUrl}></video>
                    <button onClick={handleClose} className='absolute right-3 top-3 w-10 h-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center p-4'>
                        <AiOutlineClose className='text-white' size={30} />
                    </button>
                    <div className='absolute bottom-[10%] left-10'>
                        <p className='text-white text-3xl md:text-3xl lg:text-5xl h-full font-bold mb-8'>
                            {data?.title}
                        </p>
                        <div className='flex
                        flex-row gap-4 items-center'>
                            <PlayButton movieId={data?.id} />
                            <FavoriteButton movieId={data?.id} />

                        </div>
                    </div>
                </div>
                <div className='px-12 py-8'>
                    <p className='text-green-400 font-semibold text-lg'>
                        New
                    </p>
                    <p className='text-white text-lg'>
                        {data.duration}

                    </p>
                    <p className='text-white text-lg'>
                        {data.genre}

                    </p>
                    <p className='text-white text-lg'>
                        {data.description}

                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoModal