import { galindo } from '@/lib/fonts';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Scene = dynamic(() => import('@/components/Scene'));
export default function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between w-full h-[600px] relative overflow-hidden px-6 sm:px-12 ">
      {/* bg circle */}
      <div className="absolute top-2 right-1/2 sm:right-0 translate-x-1/2 sm:translate-x-1/3 -translate-y-52 bg-gradient-to-br from-[var(--color-primary)] to-[#05011a] size-[800px] lg:size-[900px] rounded-full -z-40"></div>

      {/* Left Side - Text */}
      <div className="flex flex-col items-center sm:items-start justify-start sm:justify-center sm:w-1/2 w-full h-full max-w-xl mx-auto text-center sm:text-left p-4 relative space-y-4">
        {/* Floating Badge for Small Screens */}
        <div className="absolute sm:hidden top-0 right-1/2 translate-x-1/2 -translate-y-5 text-sm bg-gradient-to-tr from-[var(--color-brown-light)] to-[#5e3a0c]  text-white py-2 px-4 shadow-md rounded-full whitespace-nowrap">
          Geo World v1.0
        </div>

        {/* Floating Badge for bigger Screens */}

        <div className="flex flex-col items-start space-y-1 min-w-[300px] w-[300px]">
          <span className="hidden sm:block text-sm font-normal bg-gradient-to-tr from-[var(--color-brown-light)] to-[#5e3a0c]  text-white py-1 px-2 shadow-md whitespace-nowrap">
            Geo World v1.0
          </span>
          <h1
            className={`${galindo.className} text-3xl sm:text-5xl font-extrabold text-gray-100 sm:text-gray-800 leading-snug sm:leading-tight drop-shadow-md`}
          >
            Explore the Countries of Our Planet
          </h1>
        </div>
        <p className="text-lg max-w-[370px] sm:text-xl  text-gray-300 sm:text-slate-800 drop-shadow-sm">
          Embark on a journey to explore countries, cultures, and breathtaking
          landscapes.
        </p>
        <Link
          href="/africa"
          className="hidden sm:inline-block px-6 py-3 text-base font-medium text-white bg-[var(--color-primary)] rounded-full shadow-lg hover:shadow-xl hover:bg-[var(--color-green-dark)] transition duration-300"
        >
          Explore Countries
        </Link>
      </div>

      {/* Right Side - Globe */}
      <div className="sm:w-1/2 w-full h-full flex justify-center items-center">
        <Scene />
      </div>
    </div>
  );
}
