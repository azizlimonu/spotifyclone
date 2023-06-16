"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadUrl from "@/hooks/useLoadUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  // get song id
  const { song } = useGetSongById(player.activeId);
  // getSongUrl
  const songUrl = useLoadUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  };

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent
        key={songUrl}
        song={song}
        songUrl={songUrl}
      />
    </div>
  )
}

export default Player