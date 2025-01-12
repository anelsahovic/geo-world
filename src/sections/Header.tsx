'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LuMapPinCheck, LuStar } from 'react-icons/lu';
import { BiDotsVertical } from 'react-icons/bi';
import { galindo } from '@/lib/fonts';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { usePathname } from 'next/navigation';

const continents = [
  {
    name: 'Africa',
    image: '/continents/africa.png',
    href: '/africa',
  },
  {
    name: 'Europe',
    image: '/continents/europe.png',
    href: '/europe',
  },
  {
    name: 'Asia',
    image: '/continents/asia.png',
    href: '/asia',
  },
  {
    name: 'Australia',
    image: '/continents/australia.png',
    href: '/australia',
  },
  {
    name: 'N. America',
    image: '/continents/north_america.png',
    href: '/north-america',
  },
  {
    name: 'S. America',
    image: '/continents/south_america.png',
    href: '/south-america',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="flex items-center justify-between w-full py-2 px-8 lg:py-1 border-b border-[var(--color-brown-light)] bg-[var(--color-background)]">
      <div>
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src="/logo.png" alt="Geo World" width={40} height={40} />
          <span className={`${galindo.className}  text-2xl`}>Geo World</span>
        </Link>
      </div>
      <nav className="hidden md:flex items-center justify-center gap-4">
        {continents.map(({ name, image, href }) => (
          <Link
            key={href}
            href={href}
            className="flex lg:flex-col justify-center items-center group lg:w-24"
          >
            <Image
              src={image}
              alt={name}
              width={50}
              height={50}
              className={`group-hover:scale-110 transition duration-300 ${
                path === href ? 'scale-110' : ''
              }`}
            />
            <p
              className={`hidden lg:block group-hover:font-bold transition duration-500 ${
                path === href ? 'font-bold' : ''
              }`}
            >
              {name}
            </p>
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center justify-center  ">
        <Link
          href="/wishlist"
          className="flex flex-col items-center justify-center  py-2 px-4  bg-[var(--color-primary)] text-white w-full h-full rounded-l-full hover:bg-[var(--color-green-dark)] transition duration-300"
        >
          <LuStar className="size-5" />
          <span className=" hidden lg:block text-sm">Wishlist</span>
        </Link>
        <Link
          href="/visited"
          className="flex flex-col items-center justify-center py-2 px-4 bg-[var(--color-primary)] text-white w-full h-full rounded-r-full hover:bg-[var(--color-green-dark)] transition duration-300"
        >
          <LuMapPinCheck className="size-5" />
          <span className="hidden lg:block text-sm">Visited</span>
        </Link>
      </div>

      {/* mobile menu */}
      <div className="flex md:hidden items-center justify-center">
        <button
          className="p-2 bg-[var(--color-primary)] rounded-lg shadow"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BiDotsVertical className="size-7 text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute w-[80%] h-screen top-0 right-0 border-l border-[var(--color-brown-light)] shadow-xl bg-[var(--color-mobile-menu-background)] z-10">
          <div className="w-full h-full relative flex flex-col items-center justify-evenly">
            {/* close button */}
            <div className="absolute top-2 left-2">
              <button
                className="p-2 bg-[var(--color-primary)] rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <IoMdClose className="size-4 text-white" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <Link href="/" className="flex items-center justify-center gap-2">
                <Image src="/logo.png" alt="Geo World" width={40} height={40} />
                <span className={`${galindo.className}  text-2xl`}>
                  Geo World
                </span>
              </Link>
              <p className="text-center text-sm max-w-[200px]">
                Explore the world&apos; wonders and cultures at one place.
              </p>
            </div>

            <div className="w-full">
              {continents.map(({ name, image, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex justify-center items-center group w-full border-b border-[var(--color-brown-light)] py-2 gap-2"
                >
                  <Image
                    src={image}
                    alt={name}
                    width={50}
                    height={50}
                    className={`group-hover:scale-110 transition duration-300 ${
                      path === href ? 'scale-110' : ''
                    }`}
                  />
                  <p
                    className={`group-hover:font-bold text-xl transition duration-500 ${
                      path === href ? 'font-bold' : ''
                    }`}
                  >
                    {name}
                  </p>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-evenly w-full">
              <Link
                href="/wishlist"
                className="flex items-center justify-center  py-3  w-24 gap-1 bg-[var(--color-primary)] text-white  rounded-2xl hover:opacity-80 transition duration-300"
              >
                <LuStar className="size-5" />
                <span className="text-sm">Wishlist</span>
              </Link>
              <Link
                href="/visited"
                className="flex items-center justify-center py-3 gap-1 bg-[var(--color-primary)] text-white rounded-2xl w-24 hover:opacity-80 transition duration-300"
              >
                <LuMapPinCheck className="size-5" />
                <span className="text-sm">Visited</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
