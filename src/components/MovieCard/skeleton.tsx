import React from 'react';
import { movieCardSharedClasses } from './sharedClasses';

const MovieCardSkeleton: React.FC = () => {
  return (
    <div className={movieCardSharedClasses.container}>
      <div className={`${movieCardSharedClasses.image} bg-gray-700 animate-pulse`} />
      <div className={movieCardSharedClasses.overlay}>
        <div className={`${movieCardSharedClasses.overlayImage} bg-gray-700 animate-pulse`} />
        <div className={movieCardSharedClasses.content}>
          <div className="flex flex-row items-center gap-2">
            <div className={`${movieCardSharedClasses.button} bg-gray-700 animate-pulse`} />
            <div className={`${movieCardSharedClasses.button} bg-gray-700 animate-pulse`} />
            <div className={`${movieCardSharedClasses.button} bg-gray-700 animate-pulse ml-auto`} />
          </div>
          <p className="bg-gray-700 animate-pulse h-4 w-16 mt-4 rounded"></p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <div className="bg-gray-700 animate-pulse h-4 w-12 rounded"></div>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <div className="bg-gray-700 animate-pulse h-4 w-20 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;