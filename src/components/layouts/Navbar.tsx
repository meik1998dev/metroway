import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
   return (
      <div className='flex justify-between items-center w-full relative md:px-[100px] px-3 py-10 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#808080]/50'>
         <p className='flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left'>
            <span className='flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#0578ff]'>
               Metro
            </span>
            <span className='flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#202020]'>
               way
            </span>
         </p>
         <div className='flex justify-start items-start flex-grow-0 flex-shrink-0 relative md:gap-[60px] gap-3'>
            <Link
               href='/'
               className='flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-neutral-700'>
               My Booking
            </Link>
            <Link
               href='/'
               className='flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0578ff]'>
               Login / Sign In
            </Link>
         </div>
      </div>
   );
};
