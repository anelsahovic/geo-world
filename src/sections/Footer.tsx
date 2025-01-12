import { galindo } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Image src="/logo.png" alt="Geo World" width={40} height={40} />
            <span className={`${galindo.className}  text-2xl`}>Geo World</span>
          </Link>
          <p className="text-sm text-gray-400">
            Explore the world like never before
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center justify-center text-center mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[var(--color-primary)]">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#featured-countries"
                className="hover:text-[var(--color-primary)]"
              >
                Featured Countries
              </Link>
            </li>
            <li>
              <Link
                href="/#explore-continents"
                className="hover:text-[var(--color-primary)]"
              >
                Explore Continents
              </Link>
            </li>
            <li>
              <Link
                href="/#your-places"
                className="hover:text-[var(--color-primary)]"
              >
                Your Places
              </Link>
            </li>
            <li>
              <Link
                href="/#about-us"
                className="hover:text-[var(--color-primary)]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-[var(--color-primary)]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Continents links */}
        <div className="flex flex-col items-center justify-center text-center mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Continents</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/africa"
                className="hover:text-[var(--color-primary)]"
              >
                Africa
              </Link>
            </li>
            <li>
              <Link
                href="/europe"
                className="hover:text-[var(--color-primary)]"
              >
                Europe
              </Link>
            </li>
            <li>
              <Link href="/asia" className="hover:text-[var(--color-primary)]">
                Asia
              </Link>
            </li>
            <li>
              <Link
                href="/australia"
                className="hover:text-[var(--color-primary)]"
              >
                Australia
              </Link>
            </li>
            <li>
              <Link
                href="/north-america"
                className="hover:text-[var(--color-primary)]"
              >
                North America
              </Link>
            </li>
            <li>
              <Link
                href="/south-america"
                className="hover:text-[var(--color-primary)]"
              >
                South America
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-bold text-xl">Follow Us</h3>
          <div className="flex gap-6">
            <Link
              href="https://facebook.com"
              className="text-2xl hover:text-[var(--color-primary)]"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-2xl hover:text-[var(--color-primary)]"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-2xl hover:text-[var(--color-primary)]"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-2xl hover:text-[var(--color-primary)]"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-4 mt-10 flex items-center justify-center gap-1">
        <p className="text-sm text-gray-500">
          © 2025 Geo World. All rights reserved
        </p>
        <Link
          href="https://github.com/anelsahovic"
          className="text-sm text-gray-500 hover:text-[var(--color-primary)]"
        >
          @anelsahovic
        </Link>
      </div>
    </footer>
  );
}
