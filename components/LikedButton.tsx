"use client";

import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";

interface LikeButtonProps {
  songId: string;
};

const LikedButton: React.FC<LikeButtonProps> = ({ songId }) => {
  const router = useRouter();

  const { supabaseClient } = useSessionContext();
  const authModal = useAuthModal();
  const { user } = useUser();

  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    // Fetch Api to like song accord userId and songId
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from('liked_song')
        .select('*')
        .eq('user_id', user.id)
        .eq('song_id', songId)
        .single();

      if (!error && data) {
        setIsLiked(true);
      }
    }

    fetchData();
  }, [songId, supabaseClient, user?.id]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async () => {
    // validate user
    if (!user) {
      return authModal.onOpen();
    }

    // validate liked or not
    // if liked then delete liked song from db
    if (isLiked) {
      const { error } = await supabaseClient
        .from('liked_song')
        .delete()
        .eq('user_id', user.id)
        .eq('song_id', songId)

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(false);
      }
    } else {
      // if is not liked then insert to liked song db
      const { error } = await supabaseClient
        .from('liked_song')
        .insert({
          song_id: songId,
          user_id: user.id
        });


      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(true);
        toast.success('Liked');
      }
    }

    router.refresh();
  };

  return (
    <button
      onClick={handleLike}
      className="cursor-pointer transition hover:opacity-75"
    >
      <Icon color={isLiked ? '#22c55e' : 'white'} size={25} />
    </button>
  )
}

export default LikedButton;