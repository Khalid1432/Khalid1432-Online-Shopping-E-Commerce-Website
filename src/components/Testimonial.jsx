import React from 'react'
import img from '../assets/testimonia-img.png'

const Testimonial = () => {
  return (
    <section className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 my-14'>
      <h2 className='text-center text-2xl sm:text-3xl font-inter font-bold'>Testimonial</h2>
      <h3 className='text-center text-xl sm:text-2xl text-gray-500 font-inter font-bold'>What our <span className='text-pink-600'>customers</span> are saying</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 md:gap-8'>
        <div className='flex flex-col justify-center items-center'>
          
          <img src={img} alt="" loading='lazy' className='w-[80px] h-[80px] rounded-full border-2 my-10 object-contain bg-cover bg-center'/>
          
          <p className='text-base text-center'>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <div className='w-[50px] h-1 bg-pink-600 rounded-full my-6'></div>
          <p className='text-base text-inter uppercase'>Kamal Nayan Upadhyay</p>
          <p className='text-base text-inter capitalize opacity-50'>Senior Product Designer</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          
          <img src={img} alt="" loading='lazy' className='w-[80px] h-[80px] rounded-full border-2 my-10 object-contain bg-cover bg-center'/>
          
          <p className='text-base text-center'>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <div className='w-[50px] h-1 bg-pink-600 rounded-full my-6'></div>
          <p className='text-base text-inter uppercase'>S Mishra</p>
          <p className='text-base text-inter capitalize opacity-50'>UI Develeoper</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          
          <img src={img} alt="" loading='lazy' className='w-[80px] h-[80px] rounded-full border-2 my-10 object-contain bg-cover bg-center'/>
          
          <p className='text-base text-center'>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <div className='w-[50px] h-1 bg-pink-600 rounded-full my-6'></div>
          <p className='text-base text-inter uppercase'>XYZ</p>
          <p className='text-base text-inter capitalize opacity-50'>CTO</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
