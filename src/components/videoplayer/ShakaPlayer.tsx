// components/ShakaPlayer.tsx
import React, { useRef, useEffect } from 'react';
// @ts-ignore
import shaka = require('shaka-player');

interface ShakaPlayerProps {
  manifestUri: string;
}

const ShakaPlayer: React.FC<ShakaPlayerProps> = ({ manifestUri }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<shaka.Player | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const player = new shaka.Player(videoElement);
      playerRef.current = player;

      player.load(manifestUri)
        .then(() => {
          console.log('The video has now been loaded!');
        })
        .catch((error: unknown) => {
          if (error instanceof Error) {
            console.error('Error loading manifest:', error.message, error.stack);
          } else {
            console.error('Error loading manifest:', error);
          }
        });

      return () => {
        if (playerRef.current) {
          playerRef.current.destroy();
          playerRef.current = null;
        }
      };
    }
  }, [manifestUri]);

  return (
    <video ref={videoRef} className='h-full w-full' controls autoPlay style={{ width: '100%' }} />
  );
};

export default ShakaPlayer;