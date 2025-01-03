import React from 'react'
import { BsHandbag } from "react-icons/bs";

const Track = () => {
  return (
    <section className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 my-14 grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6'>

      <div className='h-[160px] px-2 rounded-lg flex flex-col justify-center items-center border-2 border-slate-500 hover:border-slate-200 duration-200 transition-all'>
        <BsHandbag className='text-pink-600 text-5xl'/>
        <h3 className='text-xl font-semibold font-inter mt-3'>Premium Tshirts</h3>
        <p className='text-sm xl:text-base font-inter mt-1'>Our T-Shirts are 100% made of cotton.</p>
      </div>

      <div className='h-[160px] px-2 rounded-lg flex flex-col justify-center items-center border-2 border-slate-500 hover:border-slate-200 duration-200 transition-all'>
        <BsHandbag className='text-pink-600 text-5xl'/>
        <h3 className='text-xl font-semibold font-inter mt-3'>Premium Tshirts</h3>
        <p className='text-sm xl:text-base font-inter mt-1'>Our T-Shirts are 100% made of cotton.</p>
      </div>

      <div className='h-[160px] px-2 rounded-lg flex flex-col justify-center items-center border-2 border-slate-500 hover:border-slate-200 duration-200 transition-all'>
        <BsHandbag className='text-pink-600 text-5xl'/>
        <h3 className='text-xl font-semibold font-inter mt-3'>Premium Tshirts</h3>
        <p className='text-sm xl:text-base font-inter mt-1'>Our T-Shirts are 100% made of cotton.</p>
      </div>
      
    </section>
  )
}

export default Track
