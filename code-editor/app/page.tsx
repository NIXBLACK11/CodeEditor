"use client"

import { Edit } from '@/components/Edit';
import Term from '@/components/Term';
import { RecoilRoot } from 'recoil';

export default function Home() {
  return (
    <RecoilRoot>
      <div className='flex flex-row w-full h-full'>
        <div className='w-1/4'>
          sidebar
        </div>
        <div className='flex flex-col w-3/4 h-full'>
          <div className='h-2/3'>
            <Edit/>
          </div>
          <div className='h-1/3'>
            <Term/>
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}