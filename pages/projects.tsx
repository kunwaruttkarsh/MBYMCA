import React from 'react'
import { Cover } from "@/components/ui/cover";
import { GlareCard } from "@/components/ui/glare-card";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering

// Dynamically import Spline to avoid server-side rendering
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const Projects = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div>
      <div className='h-screen w-full'>
    <Spline
        scene="https://prod.spline.design/F5d4bezsBlJnQgcK/scene.splinecode" 
      />
    </div>

    <div className='px-20 mt-40'>
  <div>
      <h1 className='text-6xl my-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-blue-600 text-center'>Our Projects</h1>
    </div>
  <div className="sm:p-20 w-full relative flex-wrap gap-10 flex items-center justify-center">
      <div className=''>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6" >
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <p className="font-bold z-20 text-white text-lg">The greatest trick</p>
        <p className="font- z-20 text-base text-start text-neutral-200 mt-4">
          The greatest trick the devil ever pulled was to convince the world
          that he didn&apos;t exist.
        </p>
      </GlareCard>
      </div>
      {/* <GlareCard className="flex flex-col items-start justify-end py-8 px-6" >
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <p className="font-bold z-20 text-white text-lg">The greatest trick</p>
        <p className="font- z-20 text-base text-start text-neutral-200 mt-4">
          The greatest trick the devil ever pulled was to convince the world
          that he didn&apos;t exist.
        </p>
      </GlareCard> */}
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6" >
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <p className="font-bold z-20 text-white text-lg">The greatest trick</p>
        <p className="font- z-20 text-base text-start text-neutral-200 mt-4">
          The greatest trick the devil ever pulled was to convince the world
          that he didn&apos;t exist.
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6" >
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <p className="font-bold z-20 text-white text-lg">The greatest trick</p>
        <p className="font- z-20 text-base text-start text-neutral-200 mt-4">
          The greatest trick the devil ever pulled was to convince the world
          that he didn&apos;t exist.
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6" >
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <p className="font-bold z-20 text-white text-lg">The greatest trick</p>
        <p className="font- z-20 text-base text-start text-neutral-200 mt-4">
          The greatest trick the devil ever pulled was to convince the world
          that he didn&apos;t exist.
        </p>
      </GlareCard>
    </div>
  </div>


    <div>
      <h1 className="text-4xl font-bold md:text-4xl lg:text-6xl max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-black via-blue-600 to-blue-600">
        Wanna Collaborate for <br  /> <div className='mt-4'></div> <div className='rounded-xl'><Cover className='rounded-xl'>New Projects</Cover></div>
      </h1>
      <div className="h-auto flex flex-col justify-center  items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
    </div>
    </div>
  )
}

export default Projects
