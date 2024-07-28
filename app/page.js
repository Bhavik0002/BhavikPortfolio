'use client'

import { useEffect, useState } from "react";

const TypingEffect = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return <div className="text-black font-mono font-bold">{displayedText}</div>;
};

export default function Home() {
  const [resume, setResume] = useState(true);
  const texts = [
    "Hello! This is Ahir Bhavik",
    "Full Stack Developer"
  ];

  return (
    <main className="relative h-[83vh] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center">
      <div className="flex flex-col w-[50%] sm:w-full">
        <div className="mb-2 mx-3 text-xl md:text-base sm:text-sm text-left">
          <TypingEffect text={texts[0]} />
        </div>
        <div className="mb-2 mx-3 text-4xl md:text-2xl sm:text-lg text-left">
          <TypingEffect text={texts[1]} />
        </div>
        <div className="mx-3">
          <a
            target="_blank"
            className="flex w-28 justify-center px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg hover:scale-105 focus:outline-none focus:ring-teal-400 focus:ring-offset-2 shadow-lg hover:shadow-xl animate-pulse md:w-24 md:py-2 sm:w-20 sm:py-1 sm:text-sm" onMouseLeave={() => setResume(true)} onMouseEnter={() => setResume(false)} onClick={() => setResume(true)} download="" href="/AHIR_BHAVIK_RESUME.pdf" >{resume ? 'Resume' : 'Download'}</a>
        </div>
      </div>
      <div className="sm:hidden flex w-[50%] justify-end items-center">
        <div className="h-[50%] w-[50%] right-3">
          <img src="/imagePeopleProgramming.webp" alt="Image" />
        </div>
      </div>
    </main>
  );
}
