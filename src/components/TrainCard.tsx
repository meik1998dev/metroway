import { getTimeDuration } from '@/helpers';
import { TrainTrip } from '@/types';
import React from 'react';

export const TrainCard = ({
   flight_id,
   date,
   time_depart,
   time_arrival,
   date_time_depart,
   date_time_arrival,
   origin,
   destination,
   available_seats,
}: TrainTrip) => {
   const formatDate = (date: string) => {
      return new Date(date).toLocaleDateString('en-US', {
         weekday: 'short',
         day: '2-digit',
      });
   };

   return (
      <div className='flex flex-col w-full justify-start shadow-md items-start relative gap-[15px]  px-[25px] py-5 rounded-[10px] bg-white'>
         <p className='flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#202020]'>
            {flight_id} - {destination}
         </p>
         <div className='flex justify-between items-center w-full relative'>
            <div className='flex-grow-0 flex-shrink-0  h-[57px]'>
               <p className='absolute left-0 top-0 text-sm font-medium text-left text-[#202020]'>
                  Runs on
               </p>
               <div className='flex justify-start items-start absolute left-0 top-[26px] gap-2.5 px-[15px] py-[5px] rounded-lg border border-primary'>
                  <p className='flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#202020]'>
                     Everyday
                  </p>
               </div>
            </div>
            <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-primary'>
               View train time table
            </p>
         </div>

         <div className='flex justify-between items-center md:gap-14 gap-4 w-full'>
            <div className='flex w-[110px] flex-col gap-1 text-sm font-normal'>
               <span>{formatDate(date_time_depart)}</span>
               <span>
                  {time_depart} {destination}
               </span>
            </div>
            <div className='flex flex-col justify-start items-center relative gap-[5px]'>
               <p className='flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#808080]/50'>
                  {getTimeDuration(time_depart, time_arrival)}
               </p>
               <svg
                  height={6}
                  viewBox='0 0 543 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='md:w-full w-16'
                  preserveAspectRatio='none'>
                  <path
                     d='M0.833333 3C0.833333 4.47276 2.02724 5.66667 3.5 5.66667C4.97276 5.66667 6.16667 4.47276 6.16667 3C6.16667 1.52724 4.97276 0.333333 3.5 0.333333C2.02724 0.333333 0.833333 1.52724 0.833333 3ZM536.833 3C536.833 4.47276 538.027 5.66667 539.5 5.66667C540.973 5.66667 542.167 4.47276 542.167 3C542.167 1.52724 540.973 0.333333 539.5 0.333333C538.027 0.333333 536.833 1.52724 536.833 3ZM3.5 3.5H539.5V2.5H3.5V3.5Z'
                     fill='#808080'
                     fill-opacity='0.75'
                  />
               </svg>
            </div>
            <div className='flex w-[110px] text-right flex-col gap-1 text-sm font-normal'>
               <span>{formatDate(date_time_arrival)}</span>
               <span>
                  {time_arrival} {destination}
               </span>{' '}
            </div>
         </div>

         <div className='flex justify-start items-center flex-wrap gap-[15px] '>
            <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[5px] p-[25px] rounded-[10px] bg-[#d0ffc8]'>
               <div className='flex justify-between items-start flex-grow-0 flex-shrink-0 w-[121px] relative'>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     3A
                  </p>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     Avl - 046
                  </p>
               </div>
               <div className='flex justify-between items-start flex-grow-0 flex-shrink-0 w-[121px] relative'>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     Tatkal
                  </p>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     ₹800
                  </p>
               </div>
            </div>
            <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[5px] p-[25px] rounded-[10px] bg-[#ffe9c8]'>
               <div className='flex justify-between items-start flex-grow-0 flex-shrink-0 w-[121px] relative'>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     2A
                  </p>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     Avl - 006
                  </p>
               </div>
               <div className='flex justify-between items-start flex-grow-0 flex-shrink-0 w-[121px] relative'>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     Tatkal
                  </p>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     ₹1000
                  </p>
               </div>
            </div>
            <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-[25px] rounded-[10px] bg-[#ffcdcd]'>
               <div className='flex justify-between items-start flex-grow-0 flex-shrink-0 w-[121px] relative'>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     1A
                  </p>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     WL - 36
                  </p>
               </div>
               <div className='flex justify-between items-start flex-grow-0 flex-shrink-0 w-[121px] relative'>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     Tatkal
                  </p>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     ₹1200
                  </p>
               </div>
            </div>
            <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 p-[25px] rounded-[10px] border-2 border-[#f88]'>
               <div className='flex justify-between items-start flex-grow-0 flex-shrink-0 w-[121px] relative'>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     SL
                  </p>
               </div>
               <div className='flex justify-between items-start flex-grow-0 flex-shrink-0 w-[121px] relative'>
                  <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#202020]'>
                     Not Available
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};
