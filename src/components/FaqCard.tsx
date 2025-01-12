'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  questionData: {
    question: string;
    answer: string;
  };
};

export default function FaqCard({ questionData }: Props) {
  const { question, answer } = questionData;
  const [isOpened, setIsOpened] = useState(false);

  const handleAnswer = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div
      className="flex flex-col items-start justify-center bg-white h-auto w-full md:max-w-5xl shadow-lg rounded-lg py-4 px-6 gap-3 cursor-pointer transition-all duration-300"
      onClick={handleAnswer}
    >
      {/* Question Section */}
      <div className="flex items-center justify-start gap-4 w-full">
        <div className="relative h-5 w-5 flex items-center justify-center">
          <motion.div
            animate={isOpened ? { rotate: '-180deg' } : { rotate: '0deg' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute h-[2px] w-[20px] bg-slate-800"
          />
          <motion.div
            animate={isOpened ? { rotate: '0deg' } : { rotate: '-90deg' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute h-[2px] w-[20px] bg-slate-800"
          />
        </div>
        <h3 className="font-semibold text-lg text-slate-800">{question}</h3>
      </div>

      {/* Answer Section */}
      <motion.div
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={
          isOpened
            ? { maxHeight: '10rem', opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}
