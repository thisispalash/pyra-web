'use client';

import { useEffect, useRef, useState } from 'react';

import SimulateButton from './buttons/SimulateButton';
import TopButton from './buttons/TopButton';
import WaitlistButton from './buttons/WaitlistButton';

export default function Information({ setCurrentPage }: PageProps) {

  const [ isVisible, setIsVisible ] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {

      // If the first entry is intersecting, the element is visible
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 1.0 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, []);


  const sentences = [
    'Auction begins with an initial bid of 0.1 eth',
    'Every subsequent bid is 10% more than the previous one',
    'The previous bidder receives 10% of the current bid',
    'On termination, the successful bidder or artist settles the auction',
    'The platform receives a 15% commission on the final bid',
  ]

  return (
    <div ref={ref} className="flex flex-col gap-8 items-center w-full min-h-screen p-24">
      <div className="text-4xl font-heading">
        How it works
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-4/5 font-body text-2xl">
        {sentences.map((sentence, index) => (
          <span
            key={index}
            className={isVisible ? "animate-pyra-appear opacity-0" : "opacity-0"}
            style={{ animationDelay: `${index * 1.25 + 0.1}s` }}
          >
            {sentence}
          </span>
        ))}
      </div>

    <div className="">&nbsp;</div>
    <div className="">&nbsp;</div>

    <div 
      className="flex flex-row w-4/5 justify-between items-center animate-pyra-appear opacity-0"
      style={{ animationDelay: `${sentences.length * 2.5}s` }}
    >
      <SimulateButton setCurrentPage={setCurrentPage} />
      <TopButton setCurrentPage={setCurrentPage} />
      <WaitlistButton setCurrentPage={setCurrentPage} />
    </div>

    </div>
  );
}

interface PageProps {
  setCurrentPage: (page: number) => void;
}