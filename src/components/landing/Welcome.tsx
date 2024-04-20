'use client';

import SimulateButton from './buttons/SimulateButton';
import InfoButton from './buttons/InfoButton';
import WaitlistButton from './buttons/WaitlistButton';

export default function Welcome({ setCurrentPage }: PageProps) {
  return (
    
    <div className="flex flex-col min-h-screen w-full items-center p-36 gap-6">

    <div className="text-6xl font-heading">
      Welcome to
    </div>

    <div className="text-9xl font-display">
      {'pyra'.split('').map((letter, index) => (
        <span 
          key={index}
          className="animate-pyra-appear opacity-0"
          style={{ animationDelay: `${index * 0.75 + 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </div>

    <div 
      className="text-2xl font-body animate-pyra-appear opacity-0"
      style={{ animationDelay: '3.25s' }}
    >
      The auction house that rewards every bidder!
    </div>

    <div className="">&nbsp;</div>
    <div className="">&nbsp;</div>

    <div 
      className="flex flex-row w-4/5 justify-between items-center animate-pyra-appear opacity-0"
      style={{ animationDelay: '4.25s' }}
    >

      <SimulateButton setCurrentPage={setCurrentPage} />
      <InfoButton setCurrentPage={setCurrentPage} />
      <WaitlistButton setCurrentPage={setCurrentPage} />

    </div>

  </div>
  );
}

interface PageProps {
  setCurrentPage: (page: number) => void;
}