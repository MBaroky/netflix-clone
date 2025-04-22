import React from "react";
import WatchVideoPlayer from "@/components/videoplayer/WatchVideoPlayer";
import { Params } from "next/dist/server/request/params";


const Watch = async ({params}:{params:Promise<{ movieId: string }> }) => {
  const { movieId } = await params;

  return (
    <WatchVideoPlayer movieId={movieId} />
  );
};

export default Watch;
