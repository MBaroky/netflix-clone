import React from 'react';
import { infoModalSharedClasses } from './sharedClasses';

const InfoModalSkeleton: React.FC = () => {
  return (
    <div className={infoModalSharedClasses.container}>
      <div className={infoModalSharedClasses.modalWrapper}>
        <div className={`${infoModalSharedClasses.modalContent} scale-100`}>
          <div className={infoModalSharedClasses.videoWrapper}>
            <div className={`${infoModalSharedClasses.video} bg-gray-700 animate-pulse`} />
            <div className={infoModalSharedClasses.closeButton}>
              <div className="bg-gray-700 animate-pulse w-6 h-6 rounded-full" />
            </div>
            <div className={infoModalSharedClasses.titleWrapper}>
              <div className={`${infoModalSharedClasses.title} bg-gray-700 animate-pulse h-8 w-48 rounded`} />
              <div className={infoModalSharedClasses.buttonWrapper}>
                <div className="bg-gray-700 animate-pulse h-10 w-24 rounded" />
                <div className="bg-gray-700 animate-pulse h-10 w-24 rounded" />
              </div>
            </div>
          </div>
          <div className={infoModalSharedClasses.contentWrapper}>
            <div className={`${infoModalSharedClasses.label} bg-gray-700 animate-pulse h-4 w-16 rounded`} />
            <div className={`${infoModalSharedClasses.text} bg-gray-700 animate-pulse h-4 w-32 mt-4 rounded`} />
            <div className={`${infoModalSharedClasses.text} bg-gray-700 animate-pulse h-4 w-48 mt-4 rounded`} />
            <div className={`${infoModalSharedClasses.text} bg-gray-700 animate-pulse h-4 w-full mt-4 rounded`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModalSkeleton;