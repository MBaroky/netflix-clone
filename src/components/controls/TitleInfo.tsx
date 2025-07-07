import React from 'react';
import EpisodesIcon from '@/assets/icons/episodesIcon.svg';

const TitleInfo: React.FC = () => (
  <>
    <span className="text-white text-sm font-bold">Stranger Things.S1.E10</span>
    <span className="text-white text-xs flex items-center gap-2">
        <img src={EpisodesIcon.src} alt="Episodes" />
       Episodes</span>
    <span className="text-white text-xs">Season 1 ▲</span>
  </>
);

export default TitleInfo;
