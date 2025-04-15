import Link from 'next/link';
import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';

interface PlayButtonProps {
    movieId: string;
}

const PlayButton:React.FC<PlayButtonProps> = ({movieId}) => {
  return (
    <Link href={`/watch/${movieId}`} className='bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition'>
        <BsFillPlayFill className='text-black mr-2' size={25}/>
        Play
    </Link>
  )
}

export default PlayButton