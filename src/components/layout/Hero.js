import React from 'react'
import Image from 'next/image';
import Right from '../icons/right';

const Hero = () => {
  return (
    <section className=' hero mt-4'>
      <div className='py-12'>
        <h1 className='text-4xl font-semibold leading-[3rem]'>
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-primary">
            Pizza
          </span>
        </h1>

        <p className=' my-6 text-sm text-gray-500'>
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life

        </p>

        <div className='flex items-center text-sm gap-5'>
          <button className=' flex gap-2 border-0 items-center justify-center  bg-primary text-white px-8 py-2 rounded-full'>Order now <Right /></button>
          <button className='flex gap-2  border-0 justify-center items-center font-semibold text-gray-600 '>Learn more <Right /> </button>
        </div>
      </div>
      <div className=' relative' >
        <Image src={'/pngwing.com.png'} alt={'pizza'} layout={'fill'} objectFit={'contain'} />
      </div>
    </section>
  );

}

export default Hero