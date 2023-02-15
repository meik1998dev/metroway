import { Navbar } from '@/components/layouts/Navbar';
import { SearchFilter } from '@/components/layouts/SearchFilter';
import { Searchresult } from '@/components/layouts/Searchresult';

export default function Home() {
   return (
      <>
         <Navbar />
         <div className='grid xl:grid-cols-[40%_55%] justify-center grid-cols-1 px-2 gap-14 container mx-auto my-7'>
            <SearchFilter />
            <Searchresult />
         </div>
      </>
   );
}
