import { SearchQuery, SearchQueryContextType } from '@/types';
import { createContext, useState } from 'react';

export const searchQueryContext = createContext<SearchQueryContextType>({
   searchQuery: { passengers: 0, origin: '', destination: '', date: '' },
   setsearchQuery: () => {},
});

const FilterQueryProvider = ({ children }: { children: JSX.Element }) => {
   const [searchQuery, setsearchQuery] = useState<SearchQuery>({
      passengers: 0,
      origin: '',
      destination: '',
      date: '',
   });

   return (
      <searchQueryContext.Provider value={{ searchQuery, setsearchQuery }}>
         {children}
      </searchQueryContext.Provider>
   );
};

export default FilterQueryProvider;
