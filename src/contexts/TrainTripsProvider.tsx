import {
   SearchQuery,
   SearchQueryContextType,
   TrainTrip,
   TrainTripContextType,
} from '@/types';
import { createContext, useState } from 'react';

export const trainTripsContext = createContext<TrainTripContextType>({
   trips: [],
   setTrips: () => {},
});

const TrainTripsProvider = ({ children }: { children: JSX.Element }) => {
   const [trips, setTrips] = useState<TrainTrip[]>([]);

   return (
      <trainTripsContext.Provider value={{ trips, setTrips }}>
         {children}
      </trainTripsContext.Provider>
   );
};

export default TrainTripsProvider;
