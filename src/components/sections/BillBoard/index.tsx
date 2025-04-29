"use client";
import React, { useCallback } from "react";

// Hooks
import useBillboard from "@/hooks/useBillboard";
import useVideoDuration from "@/hooks/useVideoDuration";
import useInfoModal from "@/hooks/useInfoModal";

// Icons
import { AiOutlineInfoCircle } from "react-icons/ai";

// Components
import MuteButton from "@/components/videoplayer/MuteButton";
import PlayButton from "@components/PlayButton";

// Styles
import Style from "./Billboard.module.css";
import Skeleton from "@/components/Skeleton";

const Billboard = () => {
  const { openModal } = useInfoModal();

  const videRef = React.useRef<HTMLVideoElement>(null);

  const { data, isLoading }: { data: Movie; isLoading: boolean } =
    useBillboard();

  useVideoDuration({
    videoRef: videRef,
    startTime: 0,
    stopTime: 25,
  });

  const handleOpenModel = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className={Style.container}>
      <Skeleton isLoading={isLoading} className={Style.video}>
        <video
          ref={videRef}
          autoPlay
          loop
          className={Style.video}
          poster={data?.thumbnailUrl}
          src={data?.videoUrl}
        />
      </Skeleton>
      <div className=''>
        <div className={Style.contentWrapper}>
          <Skeleton
            isLoading={isLoading}
            className={Style.title}
            placeholder='Lorem'>
            <p className={Style.title}>{data?.title}</p>
          </Skeleton>

          <Skeleton
            isLoading={isLoading}
            className={Style.description}
            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '>
            <p className={Style.description}>{data?.description}</p>
          </Skeleton>

          <div className={Style.buttonWrapper}>
            <Skeleton
              isLoading={isLoading}
              className={Style.infoButton}
              placeholder='Play'>
              <PlayButton movieId={data?.id} />
            </Skeleton>

            <Skeleton
              isLoading={isLoading}
              className={Style.infoButton}
              placeholder='More Info'>
              <button
                onClick={handleOpenModel}
                className={Style.infoButton}>
                <AiOutlineInfoCircle
                  className='text-white mr-2'
                  size={20}
                />
                More Info
              </button>
            </Skeleton>
          </div>
        </div>
        <div className={Style.muteButtonWrapper}>
          <Skeleton
            isLoading={isLoading}
            className={`${Style.muteButton} rounded-full w-14 h-14`}>
            <MuteButton videoRef={videRef} />
          </Skeleton>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
