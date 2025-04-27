import React from 'react';

// Styles
import { billboardSharedClasses } from './sharedClasses';


const BillboardSkeleton: React.FC = () => {
  return (
    <div className={billboardSharedClasses.container}>
      <div className={`${billboardSharedClasses.video} bg-skeleton animate-skeleton`} />
      <div className={billboardSharedClasses.contentWrapper}>
        <div className={`${billboardSharedClasses.title} bg-skeleton animate-skeleton h-8 w-[50%] rounded`} />
        <div className={`${billboardSharedClasses.description} bg-skeleton animate-skeleton h-4 w-[70%] mt-4 rounded`} />
        <div className={billboardSharedClasses.buttonWrapper}>
          <div className={`${billboardSharedClasses.infoButton} bg-skeleton animate-skeleton h-8 w-24 rounded`} />
          <div className={`${billboardSharedClasses.infoButton} bg-skeleton animate-skeleton h-8 w-32 rounded`} />
        </div>
      </div>
      <div className={billboardSharedClasses.muteButtonWrapper}>
        <div className="bg-skeleton animate-skeleton h-8 w-8 rounded-full" />
      </div>
    </div>
  );
};

export default BillboardSkeleton;