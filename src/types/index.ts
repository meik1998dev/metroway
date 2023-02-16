export type TrainTrip = {
   flight_id: number;
   date: string;
   time_depart: string;
   time_arrival: string;
   date_time_depart: string;
   date_time_arrival: string;
   origin: string;
   destination: string;
   available_seats: number;
};

export type SearchQuery = {
   passengers: number;
   origin: string;
   destination: string;
   date: string;
};

export type SearchQueryContextType = {
   searchQuery: SearchQuery;
   setsearchQuery: (searchQuery: SearchQuery) => void;
};

export type TrainTripContextType = {
   trips: TrainTrip[];
   setTrips: (tripsArr: TrainTrip[]) => void;
};
