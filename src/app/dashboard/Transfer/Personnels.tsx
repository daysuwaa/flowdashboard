'use client';
import React, { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ChevronRight } from 'lucide-react'

import person1 from "../../assets/person1.svg"
import person2 from "../../assets/person2.svg"
import person3 from "../../assets/person3.svg"
import person4 from "../../assets/person4.png"
import WriteAmountInput from './WriteAmountInput';
import Headings from '../Headings';

type Props = {
  imagesrc: StaticImageData,
  name: string,
  occupation: string,
  fontWeight: string
}

const ImagesTitlesComponent = ({ imagesrc, name, occupation, fontWeight }: Props) => {
  return (
    <div className="w-[30%] lg:w-[100px] text-center flex-shrink-0">
      <Image src={imagesrc} alt='profile' className='rounded-full w-16 h-16 mx-auto mb-2' />
      <p className={`${fontWeight} text-black text-sm`}>{name}</p>
      <p className="text-[#718EBF] text-xs">{occupation}</p>
    </div>
  )
}

const Personnels = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <div>
         <Headings 
            headingText='Quick Transfer'
            headingTextPosition='text-start'
             headingTextSize='text-[22px]'
            />
    <div className="bg-white rounded-2xl py-9 relative ">
      <div className=' flex gap-5 lg:gap-3 overflow-x-auto scroll-smooth' ref={scrollRef}>
        <ImagesTitlesComponent
          imagesrc={person1}
          fontWeight='font-bold'
          name='Livia Bator'
          occupation='CEO'
        />
        <ImagesTitlesComponent
          imagesrc={person2}
          fontWeight='font-normal'
          name='Randy Press'
          occupation='Director'
        />
        <ImagesTitlesComponent
          imagesrc={person3}
          fontWeight='font-normal'
          name='Big man'
          occupation='Designer'
        />
        <ImagesTitlesComponent
          imagesrc={person4}
          fontWeight='font-normal'
          name='Workman'
          occupation='Designer'
        />
        <ImagesTitlesComponent
          imagesrc={person2}
          fontWeight='font-normal'
          name='Chris Ray'
          occupation='Manager'
        />
        
      </div>

      {/* Right scroll button */}
      <button 
       aria-label="scroll to the right"
        onClick={scrollRight}
        className="absolute top-1/2 -translate-y-1/2 right-2 bg-white hover:bg-[#d7d7d7] text-[#718EBF] p-2 rounded-full shadow-md"
      >
        <ChevronRight size={20} />
      </button>
        <WriteAmountInput/>
    </div>
    </div>
  )
}

export default Personnels