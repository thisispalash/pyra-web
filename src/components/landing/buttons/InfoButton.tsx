'use client';

import { Button } from '@/components/ui/button';
import { SetCurrentPageProps } from './types';

export default function InfoButton({ setCurrentPage }: SetCurrentPageProps) {
  return (
    <Button 
      variant="outline" 
      className="font-cta" 
      onClick={() => setCurrentPage(1)}
    >
      How it works
    </Button>
  );
}