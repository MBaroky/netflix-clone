import React from "react";
import Link from "next/link";

// Icons
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

// Components
import FavoriteButton from "@/components/FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";

// Styles
import Style from "./MovieCard.module.css";
import Skeleton from "../Skeleton";

// Types
interface MovieCardProps {
  data: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { openModal } = useInfoModal();

  return (
    <div
      className={`${Style.container} group
col-span`}>
      <Skeleton isLoading={!data} className={Style.image}>
        <img
          src={data.thumbnailUrl}
          alt={data.title}
          className={`${Style.image} group-hover:opacity-90 sm:group-hover:opacity-0`}
        />
      </Skeleton>
      <div
        className={`${Style.overlay} group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:-translate-x-[1.1%] group-hover:opacity-100  duration-200`}>
        <img
          src={data.thumbnailUrl}
          alt={data.title}
          className={`${Style.overlayImage}  duration`}
        />
        <div className={Style.content}>
          <div className='flex flex-row items-center gap-2'>
            <Link
              href={`/watch/${data.id}`}
              className={`${Style.button}   bg-white hover:bg-neutral-300`}>
              <BsFillPlayFill size={30} />
            </Link>
            <FavoriteButton movieId={data?.id} />
            <button
              onClick={() => openModal(data?.id)}
              className={`${Style.button} ml-auto border-white border-2 hover:border-neutral-300`}>
              <BiChevronDown
                className='text-white group-hover/item:text-neutral-300 w-4 h-4'
                size={30}
              />
            </button>
          </div>
          <p className='text-green-400 font-semibold mt-4'>
            <span className='text-white'>{data?.title}</span>
          </p>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className={Style.text}>{data.duration}</p>
          </div>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className={Style.text}>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
