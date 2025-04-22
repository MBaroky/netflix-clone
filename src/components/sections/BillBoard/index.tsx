"use client";
import useBillboard from '@/hooks/useBillboard';
import React, { useCallback } from 'react';

import { AiOutlineInfoCircle } from 'react-icons/ai';
import MuteButton from '@/components/videoplayer/MuteButton';
import useVideoDuration from '@/hooks/useVideoDuration';
import PlayButton from '@components/PlayButton';
import useInfoModal from '@/hooks/useInfoModal';
import { billboardSharedClasses } from './sharedClasses';
import BillboardSkeleton from './skeleton';

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
    <div className={billboardSharedClasses.container}>
      <video
        ref={videRef}
        autoPlay
        loop
        className={billboardSharedClasses.video}
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      />
      <div className="">
        <div className={billboardSharedClasses.contentWrapper}>
          <p className={billboardSharedClasses.title}>{data?.title}</p>
          <p className={billboardSharedClasses.description}>{data?.description}</p>
          <div className={billboardSharedClasses.buttonWrapper}>
            <PlayButton movieId={data?.id} />
            <button onClick={handleOpenModel} className={billboardSharedClasses.infoButton}>
              <AiOutlineInfoCircle className="text-white mr-2" size={20} />
              More Info
            </button>
          </div>
        </div>
        <div className={billboardSharedClasses.muteButtonWrapper}>
          <MuteButton videoRef={videRef} />
        </div>
      </div>
    </div>
  );
};

export default Billboard;