"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaPlay } from 'react-icons/fa';

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => { }}
      className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 cursor-pointer transition hover:bg-neutral-100/20 pr-4'
    >
      <div className='relative min-h-[64px] min-w-[64px]'>
        <Image
          className='object-cover'
          fill
          alt="Image"
          src={image}
        />
      </div>

      <p className='font-medium truncate py-5'>
        {name}
      </p>

      <div className='absolute transition rounded-full opacity-0 flex items-center justify-center p-4 bg-green-500 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110'>
        <FaPlay className='text-black' />
      </div>
    </button>
  )
}

export default ListItem;