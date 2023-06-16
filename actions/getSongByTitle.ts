import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

import { Song } from "@/types";

import getSong from "./getSong";

const getSongByTitle = async (title: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  if (!title) {
    const allSongs = await getSong();
    return allSongs;
  }

  // filter by the title from songs bucket
  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${title}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongByTitle;
