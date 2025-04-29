import React from 'react';

// Styles
import Style from './Billboard.module.css'


const BillboardSkeleton: React.FC = () => {
  return (
    <div className={`${Style.container} !text-transparent`}>
      <div className={`${Style.video} bg-skeleton animate-skeleton`} />
      <div className={Style.contentWrapper}>
        <div className={`${Style.title} bg-skeleton animate-skeleton  w-[50%] rounded text-opacity-0`} >
          <p className='opacity-0'> Lorem</p>
        </div>
        <div className={`${Style.description} bg-skeleton animate-skeleton w-[70%] mt-4 rounded`} >
          <p className='opacity-0'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        </div>
        <div className={Style.buttonWrapper}>
          <div className={`${Style.infoButton} bg-skeleton animate-skeleton w-24 rounded`} >
            <p className='opacity-0'> Play</p>
          </div>
          <div className={`${Style.infoButton} bg-skeleton animate-skeleton w-32 rounded`} >
            <p className='opacity-0'> More Info</p>
          </div>
        </div>
      </div>
      <div className={Style.muteButtonWrapper}>
        <div className="bg-skeleton animate-skeleton h-14 w-14 rounded-full" />
      </div>
    </div>
  );
};

export default BillboardSkeleton;