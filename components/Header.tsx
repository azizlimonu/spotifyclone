"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";

import Button from './Button';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className
}) => {
  const user = false;
  const router = useRouter();

  const handleLogout = () => {
    console.log("logout Triggered");
  };

  return (
    <div
      className={
        twMerge(`h-fit bg-gradient-to-b p-6 from-emerald-800`, className)
      }
    >
      <div className='w-full mb-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>
          <button
            onClick={() => router.back()}
            className='rounded-full bg-black flex transition items-center justify-center cursor-pointer hover:opacity-75'
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>

          <button
            onClick={() => router.forward()}
            className='rounded-full bg-black flex transition items-center justify-center cursor-pointer hover:opacity-75'
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>

        <div className="flex md:hidden gap-x-2 items-center">
          <button
            onClick={() => router.push('/')}
            className='rounded-full p-2 bg-white flex transition items-center justify-center cursor-pointer hover:opacity-75'
          >
            <HiHome className="text-black" size={20} />
          </button>

          <button
            onClick={() => router.push('/search')}
            className='rounded-full p-2 bg-white flex transition items-center justify-center cursor-pointer hover:opacity-75'
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>

        <div className='flex justify-between gap-x-4 items-center'>
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button
                onClick={handleLogout}
                className='bg-white'
              >
                <GrLogout />
              </Button>

              <Button
                onClick={() => router.push('/account')}
                className='bg-white'
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={() => console.log("Auth Modal Triggered")}
                  className='bg-transparent font-medium text-neutral-300'
                >
                  Sign Up
                </Button>
              </div>

              <div>
                <Button
                  onClick={() => console.log("Auth Modal Triggered")}
                  className='bg-transparent font-medium text-neutral-300'
                >
                  Login
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header