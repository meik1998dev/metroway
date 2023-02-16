import React, { useContext } from 'react';
import { searchQueryContext } from '@/contexts/FilterQueryProvider';
import { trainTripsContext } from '@/contexts/TrainTripsProvider';
import { trainTripsData } from '@/mock/trainTrips';
import { DaysSwiper } from '../DaysSwiper';

export const SearchFilter = () => {
   const { searchQuery, setsearchQuery } = useContext(searchQueryContext);
   const { setTrips } = useContext(trainTripsContext);

   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setsearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
   };

   const handleSearch = async () => {
      const filteredTrips = trainTripsData.filter(
         (trip) =>
            trip.date === searchQuery.date &&
            trip.destination.toLowerCase() ===
               searchQuery.destination.toLowerCase() &&
            trip.origin.toLowerCase() === searchQuery.origin.toLowerCase(),
      );
      setTrips(filteredTrips);
   };

   return (
      <div className='flex flex-col md:gap-14 gap-3'>
         <p className='flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-primary'>
            Search for a trip
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
               disabled={
                  !searchQuery.origin.length || !searchQuery.destination.length
               }
               onClick={handleSearch}
               className='flex justify-center disabled:cursor-not-allowed disabled:opacity-50 hover:bg-primary/80 active:bg-primary transition-all items-center text-sm font-medium text-white
                  w-full relative overflow-hidden gap-2.5 px-[25px] py-4 rounded-[10px] bg-primary'>
               Search for trains
            </button>
         </div>
         <DaysSwiper />
      </div>
   );
};
