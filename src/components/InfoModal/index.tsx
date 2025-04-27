// React and hooks
"use client";
import React, { useCallback, useEffect, useState } from 'react';

// Custom hooks
import useInfoModal from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';

// Icons
import { AiOutlineClose } from 'react-icons/ai';

// Components
import PlayButton from '@components/PlayButton';
import FavoriteButton from '@components/FavoriteButton';
import InfoModalSkeleton from './skeleton';

// Styles
import Style from './InfoModal.module.css';


const InfoModal = () => {
  // States
  const { movieId, isOpen: visible, closeModal: beforeClose } = useInfoModal();
  const [isVisible, setIsVisible] = useState(!!visible);
  const { data, isLoading } :{
    data: Movie,
    isLoading: boolean
  } = useMovie(movieId);

  // Effects
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
    <div onClick={closeBlackArea} className={Style.container}>
      <div className={Style.modalWrapper}>

        {isLoading ?
          (
            <InfoModalSkeleton />
          ):(
            <div
              className={`${Style.modalContent} ${
                isVisible ? 'scale-100' : 'scale-0'
              }`}
            >
              <div className={Style.videoWrapper}>
                <video
                  autoPlay
                  muted
                  loop
                  className={Style.video}
                  src={data?.videoUrl}
                  poster={data?.thumbnailUrl}
                ></video>
                <button
                  onClick={handleClose}
                  className={Style.closeButton}
                >
                  <AiOutlineClose className="text-white" size={30} />
                </button>
                <div className={Style.titleWrapper}>
                  <p className={Style.title}>{data?.title}</p>
                  <div className={Style.buttonWrapper}>
                    <PlayButton movieId={data?.id} />
                    <FavoriteButton movieId={data?.id} />
                  </div>
                </div>
              </div>
              <div className={Style.contentWrapper}>
                <p className={Style.label}>New</p>
                <p className={Style.text}>{data?.duration}</p>
                <p className={Style.text}>{data?.genre}</p>
                <p className={Style.text}>{data?.description}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default InfoModal;