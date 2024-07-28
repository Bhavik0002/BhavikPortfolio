'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="flex sm:h-8">
      <div className="flex flex-auto">
        <Link href="/" className="flex items-center">
          <span className="text-lg font-bold font-mono ml-3 sm:text-xs">BHAVIK PORTFOLIO</span>
        </Link>
        <div className="hidden absolute top-0 right-2 sm:inline-block">
          {!menu ? <button onClick={() => setMenu(true)} className="text-white focus:outline-none my-1">
            <Image src="/burger-menu-right-svgrepo-com.svg" width={25} height={5} alt="SVG Image" /></button>
            : <button onClick={() => setMenu(false)} className="text-white focus:outline-none my-1"><Image src="/close-svgrepo-com.svg" width={25} height={5} alt="SVG Image" />
            </button>}
        </div>
        <div className="sm:hidden flex mx-auto">
          <ul className="flex p-3 font-mono">
            <li>
              <Link href="/" className="mx-3 p-2 hover:bg-black hover:rounded-xl hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="mx-3 p-2 relative hover:bg-black hover:rounded-xl hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/projects" className="mx-3 p-2 relative hover:bg-black hover:rounded-xl hover:text-white">Projects</Link>
            </li>
          </ul>
        </div>
      </div>

      {menu && (
        <div className="flex flex-col items-center bg-grey-100 w-full absolute mt-8 font-mono">
          <Link onClick={() => setMenu(false)} href="/" className="p-1 text-xs hover:bg-black hover:rounded-sm sm:z-10 hover:text-white">Home</Link>
          <Link onClick={() => setMenu(false)} href="/about" className="p-1 text-xs hover:bg-black hover:rounded-sm sm:z-10 hover:text-white">About</Link>
          <Link onClick={() => setMenu(false)} href="/projects" className="p-1 text-xs hover:bg-black hover:rounded-sm sm:z-10 hover:text-white">Projects</Link>
        </div>
      )}
    </nav>
  );
}
