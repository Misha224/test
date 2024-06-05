'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { GetProductsResponse } from '@/api/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';

<<<<<<< HEAD
import { NewCollection } from './NewCollection';
import { Products } from './Products';
=======
import { Bracelets } from './Bracelets';
import { Necklaces } from './Necklaces';
import { NewCollection } from './NewCollection';
import { Rings } from './Rings';
>>>>>>> e036c06ba22b01d8b355680d2a2a268f1e4b99a5

const tabs = [
  {
    name: 'НОВАЯ КОЛЛЕКЦИЯ',
    value: 'new-collection'
  },
  {
    name: 'КОЛЬЦА',
    value: 'rings'
  },
  {
    name: 'БРАСЛЕТЫ',
    value: 'bracelets'
  },
  {
    name: 'ОЖЕРЕЛЬЯ',
    value: 'necklaces'
  }
];

interface TabsContainerProps {
  products: GetProductsResponse;
}

export const TabsContainer = ({ products }: TabsContainerProps) => {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'new-collection';

  return (
    <Tabs defaultValue={defaultTab} className='flex flex-col items-center'>
<<<<<<< HEAD
      <TabsList className='mb-10 flex-col lg:flex-row'>
=======
      <TabsList className='mb-7 flex-col lg:flex-row'>
>>>>>>> e036c06ba22b01d8b355680d2a2a268f1e4b99a5
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className='w-full lg:w-fit'>
            <Link
              href={{
                query: { tab: tab.value }
              }}
            >
              {tab.name}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent
        value='new-collection'
        className='flex w-full flex-wrap justify-center gap-[80px] font-kharkiv text-lg'
      >
        <NewCollection />
      </TabsContent>
      <TabsContent
        value='rings'
        className='flex w-full flex-wrap justify-center gap-[80px] font-kharkiv text-lg'
      >
<<<<<<< HEAD
        <Products products={products.rings} />
=======
        <Rings products={products.rings} />
>>>>>>> e036c06ba22b01d8b355680d2a2a268f1e4b99a5
      </TabsContent>
      <TabsContent
        value='bracelets'
        className='flex w-full flex-wrap justify-center gap-[80px] font-kharkiv text-lg'
      >
<<<<<<< HEAD
        <Products products={products.bracelets} />
=======
        <Bracelets products={products.bracelets} />
>>>>>>> e036c06ba22b01d8b355680d2a2a268f1e4b99a5
      </TabsContent>
      <TabsContent
        value='necklaces'
        className='flex w-full flex-wrap justify-center gap-[80px] font-kharkiv text-lg'
      >
<<<<<<< HEAD
        <Products products={products.necklaces} />
=======
        <Necklaces products={products.necklaces} />
>>>>>>> e036c06ba22b01d8b355680d2a2a268f1e4b99a5
      </TabsContent>
    </Tabs>
  );
};
