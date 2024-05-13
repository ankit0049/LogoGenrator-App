import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

function Header({ downloadLogo }) {
  return (
    <div className='p-4 shadow-sm border flex justify-between h-14 items-center'>
      <img className='bg-red-200 w-40' src="/logo.png" alt="" />
      <Button onClick={downloadLogo} className='flex items-center gap-2' variant=''>
        <Download className='h-4 w-4' />
        Download
      </Button>
    </div>
  );
}

export default Header;
