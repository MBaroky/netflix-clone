"use client";

import useInfoModal from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';
import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PlayButton from '@components/PlayButton';
import FavoriteButton from '@components/FavoriteButton';
import { infoModalSharedClasses } from './sharedClasses';
import InfoModalSkeleton from './skeleton';

const InfoModal = () => {
  const { movieId, isOpen: visible, closeModal: beforeClose } = useInfoModal();
  const [isVisible, setIsVisible] = useState(!!visible);
  const { data, isLoading } :{
    data: Movie,
    isLoading: boolean
  } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

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
    <div onClick={closeBlackArea} className={infoModalSharedClasses.container}>
      <div className={infoModalSharedClasses.modalWrapper}>

        {isLoading ?
          (
            <InfoModalSkeleton />
          ):(
            <div
              className={`${infoModalSharedClasses.modalContent} ${
                isVisible ? 'scale-100' : 'scale-0'
              }`}
            >
              <div className={infoModalSharedClasses.videoWrapper}>
                <video
                  autoPlay
                  muted
                  loop
                  className={infoModalSharedClasses.video}
                  src={data?.videoUrl}
                  poster={data?.thumbnailUrl}
                ></video>
                <button
                  onClick={handleClose}
                  className={infoModalSharedClasses.closeButton}
                >
                  <AiOutlineClose className="text-white" size={30} />
                </button>
                <div className={infoModalSharedClasses.titleWrapper}>
                  <p className={infoModalSharedClasses.title}>{data?.title}</p>
                  <div className={infoModalSharedClasses.buttonWrapper}>
                    <PlayButton movieId={data?.id} />
                    <FavoriteButton movieId={data?.id} />
                  </div>
                </div>
              </div>
              <div className={infoModalSharedClasses.contentWrapper}>
                <p className={infoModalSharedClasses.label}>New</p>
                <p className={infoModalSharedClasses.text}>{data?.duration}</p>
                <p className={infoModalSharedClasses.text}>{data?.genre}</p>
                <p className={infoModalSharedClasses.text}>{data?.description}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default InfoModal;