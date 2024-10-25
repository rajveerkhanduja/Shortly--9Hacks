"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyState from './_component/EmptyState';
import Link from 'next/link';

function Dashboard() {
    const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-2xl text-primary'>Dashboard</h1>
        <Link href={'/dashboard/create-new'}>
        <Button>+ Create New</Button>
        </Link>
      </div>
      {/* {Empty state} */}
      {videoList?.length === 0 && <div>
        <EmptyState/> 
      </div>}
    </div>
  )
}

export default Dashboard