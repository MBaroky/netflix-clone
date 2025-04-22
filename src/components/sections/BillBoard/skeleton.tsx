import React from 'react';
import { billboardSharedClasses } from './sharedClasses';


const BillboardSkeleton: React.FC = () => {
  return (
    <div className={billboardSharedClasses.container}>
      <div className={`${billboardSharedClasses.video} bg-gray-700 animate-pulse`} />
      <div className={billboardSharedClasses.contentWrapper}>
        <div className={`${billboardSharedClasses.title} bg-gray-700 animate-pulse h-8 w-[50%] rounded`} />
        <div className={`${billboardSharedClasses.description} bg-gray-700 animate-pulse h-4 w-[70%] mt-4 rounded`} />
        <div className={billboardSharedClasses.buttonWrapper}>
          <div className={`${billboardSharedClasses.infoButton} bg-gray-700 animate-pulse h-8 w-24 rounded`} />
          <div className={`${billboardSharedClasses.infoButton} bg-gray-700 animate-pulse h-8 w-32 rounded`} />
        </div>
      </div>
      <div className={billboardSharedClasses.muteButtonWrapper}>
        <div className="bg-gray-700 animate-pulse h-8 w-8 rounded-full" />
      </div>
    </div>
  );
};

export default BillboardSkeleton;