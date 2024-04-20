'use client';

import { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

import Welcome from '@/components/landing/Welcome';
import Auction from '@/components/landing/Auction';
import Information from '@/components/landing/Information';
import Waitlist from '@/components/landing/Waitlist';

export default function Landing() {

  const [ currentPage, setCurrentPage ] = useState(0);

  const handlePageChange = (number: number) => setCurrentPage(number);

  return (
    <main className="flex flex-col min-h-screen items-center justify-between">

      <ReactPageScroller customPageNumber={currentPage} pageOnChange={handlePageChange}>
        <Welcome setCurrentPage={setCurrentPage} />
        <Information setCurrentPage={setCurrentPage} />
        <Auction />
        <Waitlist />
      </ReactPageScroller>

    </main>
  )
}