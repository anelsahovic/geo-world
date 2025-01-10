'use client';

import {
  addToWishlist,
  getFromLocalStorage,
  removeFromWishlist,
} from '@/utils/helperFunctions';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { LuStar } from 'react-icons/lu';

type Props = {
  name: string;
};

export default function AddToWishlistButton({ name }: Props) {
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Initialize state based on local storage
  useEffect(() => {
    const wishlist: string[] = getFromLocalStorage('wishlist') || [];
    setIsInWishlist(wishlist.includes(name));
  }, [name]);

  // Toggle wishlist status
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(name);
      setIsInWishlist(false);
    } else {
      addToWishlist(name);
      setIsInWishlist(true);
    }
  };

  return (
    <button
      onClick={handleWishlistToggle}
      className={`p-2 lg:p-2.5 ${
        isInWishlist
          ? 'bg-yellow-500 text-white'
          : 'bg-yellow-50 text-yellow-500'
      } border-2 border-yellow-500 rounded-full  hover:bg-yellow-500 hover:text-white transition duration-300`}
    >
      {isInWishlist ? (
        <FaStar className="size-5" />
      ) : (
        <LuStar className="size-5" />
      )}
    </button>
  );
}
