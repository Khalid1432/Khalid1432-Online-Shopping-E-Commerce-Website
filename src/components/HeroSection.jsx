import React from 'react'
import HeroImg from '../assets/heroImage.png'

const HeroSection = () => {
  return (
    <section className='mx-auto mt-14 sm:mt-0'>
      <img src={HeroImg} alt="img" loading="lazy" className=' w-full  object-contain'/>
    </section>
  )
}

export default HeroSection
