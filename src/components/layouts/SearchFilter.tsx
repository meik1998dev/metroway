import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { generateNext30days } from '@/helpers';

export const SearchFilter = () => {
   return (
      <div className='flex flex-col gap-14'>
         <p className='flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-primary'>
            Your Search Results
         </p>
         <div className='flex flex-col gap-7'>
            <div className='grid grid-cols-2 gap-6'>
               <input
                  type='text'
                  placeholder='NDLS , New Delhi Railway Station'
                  className='border-b bg-transparent outline-none px-2 placeholder:text-[#808080] py-4 text-sm border-gray-[#808080]'
               />
               <input
                  type='text'
                  placeholder='LJN, Lucknow Junction'
                  className='border-b bg-transparent outline-none px-2 placeholder:text-[#808080] py-4 text-sm border-gray-[#808080]'
               />
            </div>
            <button
               className='flex justify-center hover:bg-primary/80 active:bg-primary transition-all items-center text-sm font-medium text-white
                  w-full relative overflow-hidden gap-2.5 px-[25px] py-4 rounded-[10px] bg-primary'>
               Search for trains
            </button>
         </div>
         <div className='h-24'>
            <Swiper
               slidesPerView={5}
               spaceBetween={20}
               navigation={true}
               breakpoints={{
                  640: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                  },
                  768: {
                     slidesPerView: 4,
                     spaceBetween: 20,
                  },
                  1024: {
                     slidesPerView: 6,
                     spaceBetween: 20,
                  },
               }}
               modules={[Pagination, Navigation]}
               className='mySwiper'>
               {generateNext30days().map(({ dateText, fullDate }) => (
                  <SwiperSlide
                     key={dateText}
                     className='rounded-[10px] px-6 py-3 text-xl font-medium'>
                     <span className='h-full flex justify-center items-center'>
                        {dateText}
                     </span>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};
