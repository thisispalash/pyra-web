'use client';

import { Button } from '@/components/ui/button';
import { SetCurrentPageProps } from './types';

export default function TopButton({ setCurrentPage }: SetCurrentPageProps) {
  return (
    <Button 
      variant="outline" 
      className="font-cta" 
      onClick={() => setCurrentPage(0)}
    >
      Top
    </Button>
  );
}