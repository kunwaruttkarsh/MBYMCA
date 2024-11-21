import React from 'react'
import micro from '@/public/micro1.png'
import Link from 'next/link';
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering

// Dynamically import Spline to avoid server-side rendering
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const AdminLogin = () => {
  return (
    <div className='h-screen w-full flex flex-col sm:flex-row justify-center items-center'>
      <style jsx global>{`
         navbar{
           display: none;
         }
        footer{
          display: none;
        }
      `}</style>
      <div className="w-full sm:w-1/2 h-screen flex items-center justify-center">
      <Spline
        scene="https://prod.spline.design/x4cZLEWAcnc9Zu9W/scene.splinecode" 
      />
       </div>

      <div className="w-full sm:w-1/2 h-screen flex items-center justify-center">
        <div className="w-full">
        <div className=" font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-xl w-full">
          <a href="javascript:void(0)"><img
            src='/micro1.png'  alt="logo" className='w-40 mb-8 mx-auto block' />
          </a>

          <div className="p-8 rounded-2xl bg-gradient-to-b from-black via-blue-600 to-black text-center shadow">
            <h2 className="text-gray-100 text-center text-2xl font-bold">Sign in</h2>
            <form className="mt-8 space-y-4">
              <div>
                <label className="text-gray-100 text-sm text-start mb-2 block">User name</label>
                <div className="relative flex items-center">
                  <input name="username" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-xl outline-blue-600" placeholder="Enter user name" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-gray-100 text-sm mb-2 text-start block">Password</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full rounded-xl text-gray-800 text-sm border border-gray-300 px-4 py-3  outline-blue-600" placeholder="Enter password" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-200 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="jajvascript:void(0);" className="text-blue-200 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button type="button" className="w-full  py-3 px-4 text-sm tracking-wide rounded-xl hover:bg-gradient-to-b hover:from-blue-600 hover:to-black transition duration-300 ease-in text-white bg-gradient-to-b from-black to-blue-600 text-center focus:outline-none">
                  Sign in
                </button>
              </div>
              <p className="text-gray-100 text-sm !mt-8 text-center">Are you a Member? <Link href="/member/login" className="text-blue-100 hover:underline ml-1 whitespace-nowrap font-semibold">Login Here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin

