import React from "react";

// Components
import WatchVideoPlayer from "@/components/videoplayer/WatchVideoPlayer";


const Watch = async ({params}:{params:Promise<{ movieId: string }> }) => {
  const { movieId } = await params;

  return (
    <WatchVideoPlayer movieId={movieId} />
  );
};

export default Watch;
