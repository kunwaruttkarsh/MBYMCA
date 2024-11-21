import React from 'react'
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover1 } from '@/components/ui/dirn-aware2';
import { DirectionAwareHover2 } from '@/components/ui/dirn-hover3';
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering

// Dynamically import Spline to avoid server-side rendering
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
const Team = () => {
  const imageUrl =
  "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
    <div className='h-screen w-full'>
    <Spline
        scene="https://prod.spline.design/OWv0S-bD8LgTrtET/scene.splinecode" 
      />
  </div>

  <div className='mt-10'>
    <div>
      <h1 className='text-6xl my-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-blue-600 text-center'>Secretaries</h1>
    </div>
  <div className=" sm:px-10 relative flex-wrap gap-10 flex items-center justify-center">
    
    <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
    <DirectionAwareHover imageUrl={imageUrl}>
      <p className="font-bold text-xl">In the mountains</p>
      <p className="font-normal text-sm">$1299 / night</p>
    </DirectionAwareHover>
    </div>
    <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
    <DirectionAwareHover imageUrl={imageUrl}>
      <p className="font-bold text-xl">In the mountains</p>
      <p className="font-normal text-sm">$1299 / night</p>
    </DirectionAwareHover>
    </div>
    <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
    <DirectionAwareHover imageUrl={imageUrl}>
      <p className="font-bold text-xl">In the mountains</p>
      <p className="font-normal text-sm">$1299 / night</p>
    </DirectionAwareHover>
    </div>
    <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
    <DirectionAwareHover imageUrl={imageUrl}>
      <p className="font-bold text-xl">In the mountains</p>
      <p className="font-normal text-sm">$1299 / night</p>
    </DirectionAwareHover>
    </div>
    <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
    <DirectionAwareHover imageUrl={imageUrl}>
      <p className="font-bold text-xl">In the mountains</p>
      <p className="font-normal text-sm">$1299 / night</p>
    </DirectionAwareHover>
    </div>
    
  </div>
  </div>

   <div className='mt-40'>
   <div >
      <h1 className='text-6xl my-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-blue-600  text-center'>Joint Secretaries</h1>
    </div>
   <div className=" sm:px-10 relative flex-wrap gap-10 flex items-center justify-center">
      <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover1 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover1>
      </div>
      <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover1 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover1>
      </div>
      <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover1 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover1>
      </div>
      <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover1 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover1>
      </div>
      <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover1 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover1>
      </div>
      
    </div>
   </div>

   <div className='mt-40'>
   <div >
      <h1 className='text-6xl my-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-blue-600  text-center'>Proud Members</h1>
    </div>
    <div className=" sm:px-20 relative flex-wrap gap-10 flex items-center justify-center">
      <div className='rounded-xl p-1 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover2 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover2>
      </div>
      <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover2 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover2>
      </div>
      <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover2 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover2>
      </div>
      <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover2 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover2>
      </div>
      <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover2 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover2>
      </div>
      <div className='rounded-xl p-0.5 bg-gradient-to-b from-black via-blue-600 to-black hover:to-blue-600'>
      <DirectionAwareHover2 imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover2>
      </div>
    </div>
   </div>

  </div>
  )
}

export default Team
