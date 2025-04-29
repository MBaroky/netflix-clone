import React from 'react';

// Styles
import { movieCardSharedClasses } from './sharedClasses';
import Style from './MovieCard.module.css'

const MovieCardSkeleton: React.FC = () => {
  return (
    <div className={Style.container}>
      <div className={`${Style.image} bg-skeleton animate-skeleton`} />
    </div>
  );
};

export default MovieCardSkeleton;