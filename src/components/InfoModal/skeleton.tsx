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
              <div className={`${Style.title} bg-skeleton animate-skeleton h-8 w-48 rounded`} />
              <div className={Style.buttonWrapper}>
                <div className="bg-skeleton animate-skeleton h-10 w-24 rounded" />
                <div className="bg-skeleton animate-skeleton h-10 w-24 rounded" />
              </div>
            </div>
          </div>
          <div className={Style.contentWrapper}>
            <div className={`${Style.label} bg-skeleton animate-skeleton h-4 w-16 rounded`} />
            <div className={`${Style.text} bg-skeleton animate-skeleton h-4 w-32 mt-4 rounded`} />
            <div className={`${Style.text} bg-skeleton animate-skeleton h-4 w-48 mt-4 rounded`} />
            <div className={`${Style.text} bg-skeleton animate-skeleton h-4 w-full mt-4 rounded`} />
          </div>
        </div>
  );
};

export default InfoModalSkeleton;