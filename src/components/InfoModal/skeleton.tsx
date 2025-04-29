import React from 'react';
import Style from './InfoModal.module.css';
const InfoModalSkeleton: React.FC = () => {
  return (

        <div className={`${Style.modalContent} scale-100`}>
          <div className={Style.videoWrapper}>
            <div className={`${Style.video} bg-skeleton animate-skeleton`} />
            <div className={Style.closeButton}>
              <div className="bg-skeleton animate-skeleton w-6 h-6 rounded-full" />
            </div>
            <div className={Style.titleWrapper}>
              <div className={`${Style.title} bg-skeleton animate-skeleton w-48 rounded`} >
                <p className='opacity-0'> Lorem</p>
              </div>
              <div className={Style.buttonWrapper}>
                <div className="bg-skeleton animate-skeleton h-14 w-24 rounded" >
                  <p className='opacity-0'> Play</p>
                </div>
                <div className="bg-skeleton animate-skeleton h-14 w-14 rounded-full" />
              </div>
            </div>
          </div>
          <div className={Style.contentWrapper}>
            <div className={`${Style.label} bg-skeleton animate-skeleton  w-16 rounded`} >
              <p className='opacity-0'> New</p>
            </div>
            <div className={`${Style.text} bg-skeleton animate-skeleton  w-32 mt-4 rounded`} >
              <p className='opacity-0'> Lorem</p>
            </div>
            <div className={`${Style.text} bg-skeleton animate-skeleton  w-48 mt-4 rounded`} >
              <p className='opacity-0'> Lorem ipsum dolor sit.</p>
            </div>
            <div className={`${Style.text} bg-skeleton animate-skeleton  w-full mt-4 rounded`} >
              <p className='opacity-0'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            </div>
          </div>
        </div>
  );
};

export default InfoModalSkeleton;