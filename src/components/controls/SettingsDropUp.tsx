import React from 'react';
import DropUp from '../videoplayer/DropUp';

const SettingsDropUp: React.FC = () => (
  <DropUp
    trigger={<button className="text-white">⚙️</button>}
    className="inline-block"
  >
    <div id='controls' className="bg-gray-700 bg-opacity-80 rounded-lg p-4 flex flex-col gap-2 min-w-[250px]">
      <div className="flex items-center justify-between text-white">
        <span>Quality</span>
        <span>1080p</span>
        <span>▶</span>
      </div>
      <div className="flex items-center justify-between text-white">
        <span>Subtitles</span>
        <span>Arabic</span>
        <span>On</span>
        <span>▶</span>
      </div>
      <div className="flex items-center justify-between text-white">
        <span>Audio</span>
        <span>English</span>
        <span>▶</span>
      </div>
    </div>
  </DropUp>
);

export default SettingsDropUp;
