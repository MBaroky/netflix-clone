import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";
import useInfoModal from "@/hooks/useInfoModal";
import { movieCardSharedClasses } from "./sharedClasses";

interface MovieCardProps {
  data: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { openModal } = useInfoModal();

  return (
    <div className={movieCardSharedClasses.container}>
      <img
        src={data.thumbnailUrl}
        alt={data.title}
        className={movieCardSharedClasses.image}
      />
      <div className={movieCardSharedClasses.overlay}>
        <img
          src={data.thumbnailUrl}
          alt={data.title}
          className={movieCardSharedClasses.overlayImage}
        />
        <div className={movieCardSharedClasses.content}>
          <div className="flex flex-row items-center gap-2">
            <Link href={`/watch/${data.id}`} className={movieCardSharedClasses.button}>
              <BsFillPlayFill size={30} />
            </Link>
            <FavoriteButton movieId={data?.id} />
            <button
              onClick={() => openModal(data?.id)}
              className={`${movieCardSharedClasses.button} ml-auto`}>
              <BiChevronDown
                className="text-white group-hover/item:text-neutral-300 w-4 h-4"
                size={30}
              />
            </button>
          </div>
          <p className="text-green-400 font-semibold mt-4">
             <span className="text-white">{data?.title}</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className={movieCardSharedClasses.text}>{data.duration}</p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className={movieCardSharedClasses.text}>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
