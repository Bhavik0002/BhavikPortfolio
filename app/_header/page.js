'use client'

import Link from "next/link";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { useState, useEffect } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showButton, setShowButton] = useState(false);

  // used useEffect because somehow at quick moment it's considering the theme as dark even it is light, so added  ms to reder it.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="flex sm:h-8 dark:bg-gray-800 dark:text-white">
      <div className="flex flex-auto">
        <Link href="/" className="flex items-center">
          <span className="text-lg font-bold font-mono ml-3 sm:text-xs">BHAVIK PORTFOLIO</span>
        </Link>
        <div className="hidden absolute top-0 right-2 sm:inline-block">
          {!menu ? showButton && (
            <button onClick={() => setMenu(true)} className="text-white focus:outline-none my-1">
              <Image src="/burger-menu-right-svgrepo-com.svg" className={theme === 'light' ? 'invert' : 'invert-0'} width={25} height={5} alt="SVG Image" />
            </button>
          ) : (
            <button onClick={() => setMenu(false)} className="text-white focus:outline-none my-1">
              <Image src="/close-svgrepo-com.svg" width={25} height={5} alt="SVG Image" />
            </button>
          )}
        </div>
        <div className="sm:hidden flex mx-auto">
          <ul className="flex p-3 font-mono">
            <li>
              <Link href="/" className="mx-3 p-2 hover:bg-gray-600 dark:hover:bg-gray-700 hover:rounded-xl hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="mx-3 p-2 relative hover:bg-gray-600 dark:hover:bg-gray-700 hover:rounded-xl hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/projects" className="mx-3 p-2 relative hover:bg-gray-600 dark:hover:bg-gray-700 hover:rounded-xl hover:text-white">Projects</Link>
            </li>
          </ul>
        </div>
      </div>

      {menu && (
        <div className="flex flex-col items-center bg-gray-200 bg-opacity-50 dark:bg-opacity-50 dark:bg-cyan-100 z-10 dark:text-black w-full absolute mt-8 font-mono">
          <Link onClick={() => setMenu(false)} href="/" className="p-1 text-xs z-10">Home</Link>
          <Link onClick={() => setMenu(false)} href="/about" className="p-1 text-xs z-10">About</Link>
          <Link onClick={() => setMenu(false)} href="/projects" className="p-1 text-xs z-10">Projects</Link>
          <button
            onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); setMenu(false); }}
            className="my-1">
            {theme === 'light' ? <Image src="/sun.svg" width={25} height={5} alt="SVG Image" /> : <Image src="/moon.png" width={30} height={5} alt="Image" />}
          </button>
        </div>
      )}

      {showButton && <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="sm:hidden absolute right-2 self-center">
        {theme === 'light' ? <Image src="/sun.svg" width={30} height={5} alt="SVG Image" /> : <Image src="/moon.png" className="invert" width={40} height={5} alt="Image" />}
      </button>}
    </nav>
  );
}
