import { trainTripsContext } from '@/contexts/TrainTripsProvider';
import React, { useContext } from 'react';
import { TrainCard } from '../TrainCard';

export const Searchresult = () => {
   const { trips } = useContext(trainTripsContext);

   return (
      <div className='flex flex-col'>
         <div className='flex justify-between items-center relative p-[15px] border-t-0 border-r-0 border-b-[1.5px] border-l-0 border-[#808080]/50'>
            <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 relative md:gap-[30px] gap-4'>
               <p className='flex-grow-0 flex-shrink-0 text-[32px] font-medium text-left text-[#202020]'>
                  Available Trains
               </p>
               <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#808080]'>
                  {trips.length} Trains available
               </p>
            </div>
         </div>
         <div className='flex px-3 pb-5 flex-col gap-3 xl:h-[75vh] py-3 h-[43vh] shadow-inner overflow-y-auto'>
            {trips.map((trip) => (
               <TrainCard key={trip.flight_id} {...trip} />
            ))}
         </div>
      </div>
   );
};
