import { SearchQuery, SearchQueryContextType } from '@/types';
import { createContext, useState } from 'react';

const initialState = {
   passengers: 0,
   origin: 'London',
   destination: 'Paris',
   date: '2/18/2023',
   submitted: false,
};

export const searchQueryContext = createContext<SearchQueryContextType>({
   searchQuery: initialState,
   setsearchQuery: () => {},
});

const FilterQueryProvider = ({ children }: { children: JSX.Element }) => {
   const [searchQuery, setsearchQuery] = useState<SearchQuery>(initialState);

   return (
      <searchQueryContext.Provider value={{ searchQuery, setsearchQuery }}>
         {children}
      </searchQueryContext.Provider>
   );
};

export default FilterQueryProvider;
