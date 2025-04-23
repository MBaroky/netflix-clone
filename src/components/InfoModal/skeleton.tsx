import React from 'react';
import { infoModalSharedClasses } from './sharedClasses';

const InfoModalSkeleton: React.FC = () => {
  return (

        <div className={`${infoModalSharedClasses.modalContent} scale-100`}>
          <div className={infoModalSharedClasses.videoWrapper}>
            <div className={`${infoModalSharedClasses.video} bg-skeleton animate-skeleton`} />
            <div className={infoModalSharedClasses.closeButton}>
              <div className="bg-skeleton animate-skeleton w-6 h-6 rounded-full" />
            </div>
            <div className={infoModalSharedClasses.titleWrapper}>
              <div className={`${infoModalSharedClasses.title} bg-skeleton animate-skeleton h-8 w-48 rounded`} />
              <div className={infoModalSharedClasses.buttonWrapper}>
                <div className="bg-skeleton animate-skeleton h-10 w-24 rounded" />
                <div className="bg-skeleton animate-skeleton h-10 w-24 rounded" />
              </div>
            </div>
          </div>
          <div className={infoModalSharedClasses.contentWrapper}>
            <div className={`${infoModalSharedClasses.label} bg-skeleton animate-skeleton h-4 w-16 rounded`} />
            <div className={`${infoModalSharedClasses.text} bg-skeleton animate-skeleton h-4 w-32 mt-4 rounded`} />
            <div className={`${infoModalSharedClasses.text} bg-skeleton animate-skeleton h-4 w-48 mt-4 rounded`} />
            <div className={`${infoModalSharedClasses.text} bg-skeleton animate-skeleton h-4 w-full mt-4 rounded`} />
          </div>
        </div>
  );
};

export default InfoModalSkeleton;