'use client';

import { Button } from '@/components/ui/button';
import { SetCurrentPageProps } from './types';

export default function WaitlistButton({ setCurrentPage }: SetCurrentPageProps) {
  return (
    <Button 
      variant="outline" 
      className="font-cta" 
      onClick={() => setCurrentPage(3)}
    >
      Join the waitlist
    </Button>
  );
}