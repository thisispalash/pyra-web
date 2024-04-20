'use client';

import { Button } from '@/components/ui/button';
import { SetCurrentPageProps } from './types';

export default function SimulateButton({ setCurrentPage }: SetCurrentPageProps) {
  return (
    <Button 
      variant="outline" 
      className="font-cta" 
      onClick={() => setCurrentPage(2)}
    >
      Simulate an auction
    </Button>
  );
}