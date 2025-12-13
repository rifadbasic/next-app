"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPage() {

  const route = useRouter();
  const isLogin = false;

  const navigetHandeler = () => {
    if (isLogin) {
      route.push('/about/address')
    }
    else{
      route.push('/')
    }
  }

  return (
    <div>
      <p className='font-bold text-2xl'>About page</p>
      <button type='button' onClick={navigetHandeler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>address page</button>
    </div>
  )
}
