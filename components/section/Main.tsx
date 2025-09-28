'use client';

import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import laptop from '../../assets/images/laptop.png';
import { IAM } from '@/constants/main/iam';

export default function Main() {
  const introText = "hey! I'm a ";

  return (
    <section
      id="home"
      className="grid grid-cols-1 xl:grid-cols-2 gap-2 h-[calc(100vh-72px)] md:h-[calc(100vh-96px)] xl:h-[calc(100vh-100px)]"
    >
      <div className="flex flex-col h-auto xl:h-full mt-20 xl:mt-55">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">{introText}</h1>
        <h1 className="text-3xl md:text-6xl mb-4 pb-2 font-bold bg-gradient-to-r from-indigo-600 to-pink-200 bg-clip-text text-transparent">
          <Typewriter
            loop={0}
            words={IAM}
            cursor
            typeSpeed={125}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="py-4">
          Technology is my playground. I love turning complex problems into simple,
          elegant solutions. With a passion for clean code and modern web technologies,
          I create digital experiences that are both functional and delightful to use.
          From frontend interactions to backend logic, I enjoy exploring new ideas and
          shaping them into real, impactful products.
        </p>
      </div>
      <div className="flex justify-center h-auto xl:h-full">
        <div className="flex justify-center xl:items-center">
          <Image
            src={laptop}
            alt="Laptop image"
            className="w-auto h-75 md:h-125 xl:w-full xl:h-auto"
          />
        </div>
      </div>
    </section>
  );
}
