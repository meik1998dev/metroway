import FilterQueryProvider from '@/contexts/FilterQueryProvider';
import TrainTripsProvider from '@/contexts/TrainTripsProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <TrainTripsProvider>
         <FilterQueryProvider>
            <Component {...pageProps} />
         </FilterQueryProvider>
      </TrainTripsProvider>
   );
}
