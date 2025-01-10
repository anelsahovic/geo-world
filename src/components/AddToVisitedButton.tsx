'use client';

import {
  addToVisited,
  getFromLocalStorage,
  removeFromVisited,
} from '@/utils/helperFunctions';
import { useState, useEffect } from 'react';
import { LuMapPinPlus, LuMapPinX } from 'react-icons/lu';

type Props = {
  name: string;
};

export default function AddToVisitedButton({ name }: Props) {
  const [isVisited, setIsVisited] = useState(false);

  // Initialize state based on local storage
  useEffect(() => {
    const visited: string[] = getFromLocalStorage('visited') || [];
    setIsVisited(visited.includes(name));
  }, [name]);

  // Toggle visited status
  const handleVisitedToggle = () => {
    if (isVisited) {
      removeFromVisited(name);
      setIsVisited(false);
    } else {
      addToVisited(name);
      setIsVisited(true);
    }
  };

  return (
    <button
      onClick={handleVisitedToggle}
      className={`p-2 lg:p-2.5 ${
        isVisited
          ? 'bg-[var(--color-primary)] text-white'
          : 'bg-lime-50 text-[var(--color-primary)]'
      } border-2 border-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition duration-300`}
    >
      {isVisited ? (
        <LuMapPinX className="size-5" />
      ) : (
        <LuMapPinPlus className="size-5" />
      )}
    </button>
  );
}
