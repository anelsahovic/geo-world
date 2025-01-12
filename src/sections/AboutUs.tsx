import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div
      id="about-us"
      className="flex flex-col items-center w-full h-full px-6 py-10 "
    >
      {/* Heading */}
      <div className="flex flex-col items-start justify-start w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-800">
          About Us
        </h2>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl">
        {/* Left Section - Text */}
        <div className="flex-1 text-justify md:text-left">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Welcome to{' '}
            <span className="font-semibold text-[var(--color-primary)]">
              Geo World
            </span>
            —your ultimate companion for exploring the beauty and diversity of
            our planet! This app is designed to ignite your wanderlust and help
            you discover fascinating countries, continents, and cultures from
            around the world.
          </p>

          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            Whether you&apos;re planning your next big adventure, building a
            wishlist of destinations, or revisiting the memories of places
            you&apos;ve already explored,{' '}
            <span className="font-semibold text-[var(--color-primary)]">
              Geo World
            </span>{' '}
            has all the tools you need to make it happen.
          </p>

          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            Start your journey today and let us help you create unforgettable
            memories!
          </p>
        </div>

        {/* Right Section - Image/Divs */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Continent Info for Africa */}
          <div className="hidden lg:block absolute-center translate-x-[10px] translate-y-[30px] bg-slate-800 rounded-lg p-4 text-white transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-xl font-bold">Africa</h3>
            <p className="text-sm mb-4">Discover the diverse landscapes.</p>
            <Link
              href="/africa"
              className="text-[var(--color-primary)] hover:underline"
            >
              See countries
            </Link>
          </div>

          {/* Continent Info for Asia */}
          <div className="hidden lg:block absolute-center translate-x-[-300px] translate-y-[-150px] bg-slate-800 rounded-lg p-4 text-white transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-xl font-bold">Asia</h3>
            <p className="text-sm mb-4">
              Explore the world&apos;s largest continent.
            </p>
            <Link
              href="/asia"
              className="text-[var(--color-primary)] hover:underline"
            >
              See countries
            </Link>
          </div>

          {/* Globe Image */}
          <Image
            src="/globe.png"
            alt="Globe"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
