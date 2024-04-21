"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LandingLogo from "../../public/RoommateListLogo.png";

export default function Home() {

  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    fetch('https://bitcamp-backend.vercel.app/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <div className="h-[1000px] bg-gradient-to-b from-pink-950 to-pink-900">
        <div className="font-sans text-9xl flex items-center justify-center pt-10">
          Roomiez
        </div>
        <div className="flex mt-20 mx-20 space-x-10 justify-center items-center ">
          <div className="text-4xl font-bold text-left">
            Schedule and Plan Tasks <br />with Your Roommates
          </div>
          <Image src={LandingLogo} alt="Landing Logo" width={500} height={500} />
        </div>
      </div>
      <div className="bg-white h-[600px]">

      </div>
      <div className="bg-black h-[400px]">

      </div>
    </div>
  );
}
