import React, { useContext, useEffect, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { generateNext30days } from '@/helpers';
import { searchQueryContext } from '@/contexts/FilterQueryProvider';
import { trainTripsContext } from '@/contexts/TrainTripsProvider';
import { trainTripsData } from '@/mock/trainTrips';

export const SearchFilter = () => {
   const { searchQuery, setsearchQuery } = useContext(searchQueryContext);
   const { setTrips } = useContext(trainTripsContext);

   const nextDays = useMemo(() => generateNext30days(), []);

   const handleSelectDate = (date: string) => {
      setsearchQuery({ ...searchQuery, date });
   };

   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setsearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
   };

   function fieldsIsEmpty() {
      return !searchQuery.origin.length || !searchQuery.destination.length;
   }

   useEffect(() => {
      setsearchQuery({
         ...searchQuery,
         date: nextDays[3].fullDate,
      });
   }, []);

   const handleSearch = async () => {
      const filteredTrips = trainTripsData.filter(
         (trip) =>
            trip.date === searchQuery.date &&
            trip.destination === searchQuery.destination &&
            trip.origin === searchQuery.origin,
      );
      console.log(searchQuery);

      setTrips(filteredTrips);
   };

   return (
      <div className='flex flex-col gap-14'>
         <p className='flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-primary'>
            Your Search Results
         </p>
         <div className='flex flex-col gap-7'>
            <div className='grid grid-cols-2 gap-6'>
               <input
                  onChange={handleChangeInput}
                  name='origin'
                  type='text'
                  placeholder='NDLS , New Delhi Railway Station'
                  className='border-b bg-transparent outline-none px-2 placeholder:text-[#808080] py-4 text-sm border-gray-[#808080]'
               />
               <input
                  onChange={handleChangeInput}
                  name='destination'
                  type='text'
                  placeholder='LJN, Lucknow Junction'
                  className='border-b bg-transparent outline-none px-2 placeholder:text-[#808080] py-4 text-sm border-gray-[#808080]'
               />
            </div>
            <button
               disabled={fieldsIsEmpty()}
               onClick={handleSearch}
               className='flex justify-center disabled:cursor-not-allowed disabled:opacity-50 hover:bg-primary/80 active:bg-primary transition-all items-center text-sm font-medium text-white
                  w-full relative overflow-hidden gap-2.5 px-[25px] py-4 rounded-[10px] bg-primary'>
               Search for trains
            </button>
         </div>

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
      </div>
   );
};
