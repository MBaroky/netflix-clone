// React and hooks
"use client";
import React, { useCallback, useEffect, useState } from "react";

// Custom hooks
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";

// Icons
import { AiOutlineClose } from "react-icons/ai";

// Components
import PlayButton from "@components/PlayButton";
import FavoriteButton from "@components/FavoriteButton";

// Styles
import Style from "./InfoModal.module.css";
import Skeleton from "../Skeleton";

const InfoModal = () => {
  // States
  const {
    movieId,
    isOpen: visible,
    closeModal: beforeClose,
  } = useInfoModal();
  const [isVisible, setIsVisible] = useState(!!visible);
  const {
    data,
    isLoading,
  }: {
    data: Movie;
    isLoading: boolean;
  } = useMovie(movieId);

  // Effects
  useEffect(() => {
    setIsVisible(!!visible);
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  // functions
  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      beforeClose();
    }, 300);
  }, [beforeClose]);

  const closeBlackArea = (e: React.MouseEvent) => {
    if (e.target === e?.currentTarget) {
      handleClose();
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      onClick={closeBlackArea}
      className={`${Style.container} custom-scrollbar`}>
      <div className={Style.modalWrapper}>
        {
          <div
            className={`${Style.modalContent} ${
              isVisible ? "scale-100" : "scale-0"
            }`}>
            <div className={Style.videoWrapper}>
              <Skeleton className={Style.video} isLoading={isLoading}>
                <video
                  autoPlay
                  muted
                  loop
                  className={Style.video}
                  src={data?.videoUrl}
                  poster={data?.thumbnailUrl}></video>
              </Skeleton>
              <button
                onClick={handleClose}
                className={Style.closeButton}>
                <AiOutlineClose className='text-white' size={30} />
              </button>
              <div className={Style.titleWrapper}>
                <Skeleton
                  className={Style.title}
                  isLoading={isLoading}
                  placeholder='Lorem Ipsum'>
                  <p className={Style.title}>{data?.title}</p>
                </Skeleton>

                <div className={Style.buttonWrapper}>
                  <Skeleton
                    className={`h-14 !w-24`}
                    isLoading={isLoading}
                    placeholder='Play'>
                    <PlayButton movieId={data?.id} />
                  </Skeleton>
                  <Skeleton
                    className={`h-14 !w-14 rounded-full`}
                    isLoading={isLoading}
                    placeholder=''>
                    <FavoriteButton movieId={data?.id} />
                  </Skeleton>
                </div>
              </div>
            </div>
            <div className={Style.contentWrapper}>
              <Skeleton
                className={`${Style.label} w-1/4`}
                isLoading={isLoading}
                placeholder='New'>
                <p className={Style.label}>New</p>
              </Skeleton>
              <Skeleton
                className={Style.text}
                isLoading={isLoading}
                placeholder='Lorem Ipsum'>
                <p className={Style.text}>{data?.duration}</p>
              </Skeleton>
              <Skeleton
                className={Style.text}
                isLoading={isLoading}
                placeholder='Lorem Ipsum dolor'>
                <p className={Style.text}>{data?.genre}</p>
              </Skeleton>
              <Skeleton
                className={Style.describtion}
                isLoading={isLoading}
                placeholder='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit quis corporis maiores omnis, aliquid culpa sequi! Eum saepe iure deleniti qui quis.'>
                <p className={Style.description}>
                  {data?.description}
                </p>
              </Skeleton>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default InfoModal;
