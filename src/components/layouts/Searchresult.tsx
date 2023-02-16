import { trainTripsContext } from '@/contexts/TrainTripsProvider';
import React, { useContext } from 'react';
import { TrainCard } from '../TrainCard';

export const Searchresult = () => {
   const { trips } = useContext(trainTripsContext);

   return (
      <div className='flex flex-col gap-3 h-[83vh] overflow-y-auto'>
         {trips.map((trip) => (
            <TrainCard key={trip.flight_id} {...trip} />
         ))}
      </div>
   );
};
