"use client";
import React, { useCallback } from 'react';

// Hooks
import useBillboard from '@/hooks/useBillboard';
import useVideoDuration from '@/hooks/useVideoDuration';
import useInfoModal from '@/hooks/useInfoModal';

// Icons
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Components
import MuteButton from '@/components/videoplayer/MuteButton';
import PlayButton from '@components/PlayButton';
import BillboardSkeleton from './skeleton';

// Styles
import Style from './Billboard.module.css'

const Billboard = () => {
  const { openModal } = useInfoModal();
  const videRef = React.useRef<HTMLVideoElement>(null);
  const { data, isLoading }: { data: Movie, isLoading:boolean } = useBillboard();
  useVideoDuration({
    videoRef: videRef,
    startTime: 0,
    stopTime: 25,
  });
  const handleOpenModel = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);
  if(isLoading) {
    return (
      <BillboardSkeleton />
    )
  }
  return (
    <div className={Style.container}>
      <video
        ref={videRef}
        autoPlay
        loop
        className={Style.video}
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      />
      <div className="">
        <div className={Style.contentWrapper}>
          <p className={Style.title}>{data?.title}</p>
          <p className={Style.description}>{data?.description}</p>
          <div className={Style.buttonWrapper}>
            <PlayButton movieId={data?.id} />
            <button onClick={handleOpenModel} className={Style.infoButton}>
              <AiOutlineInfoCircle className="text-white mr-2" size={20} />
              More Info
            </button>
          </div>
        </div>
        <div className={Style.muteButtonWrapper}>
          <MuteButton videoRef={videRef} />
        </div>
      </div>
    </div>
  );
};

export default Billboard;