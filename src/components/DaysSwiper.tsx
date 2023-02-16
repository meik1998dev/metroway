import { searchQueryContext } from '@/contexts/FilterQueryProvider';
import React, { useContext, useEffect, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { generateNext30days } from '@/helpers';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const DaysSwiper = () => {
   const { searchQuery, setsearchQuery } = useContext(searchQueryContext);
   const nextDays = useMemo(() => generateNext30days(), []);

   const handleSelectDate = (date: string) => {
      setsearchQuery({ ...searchQuery, date });
   };

   return (
      <div className='h-24'>
         <Swiper
            slidesPerView={4}
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
                  slidesPerView: 7,
                  spaceBetween: 20,
               },
            }}
            modules={[Pagination, Navigation]}
            className='mySwiper'>
            {nextDays.map(({ dateText, fullDate }) => (
               <SwiperSlide
                  onClick={() => handleSelectDate(fullDate)}
                  key={dateText}
                  className={`rounded-[10px] transition-all cursor-pointer px-6 py-3 text-xl font-medium ${
                     searchQuery?.date === fullDate
                        ? 'bg-primary text-white'
                        : 'bg-white'
                  }`}>
                  <span className='h-full flex justify-center items-center'>
                     {dateText}
                  </span>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};
