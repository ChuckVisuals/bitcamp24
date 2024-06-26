"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LandingLogo from "../../public/RoommateListLogo.png";

export default function Home() {

  const chore = {
    group_name: "balls",
    due_date: "2024-04-20 23:30",
    name: "Your Chore Name",
    description: "pastt day",
    poster: "Your Chore Poster",
    fulfiller: "Your Chore Fulfiller",
  };

  return (

    <div>
      <div className="h-[1000px] bg-gradient-to-b from-pink-950 to-pink-900">
        <div className="font-sans text-9xl flex items-center justify-center pt-36">
          Roomiez
        </div>
        <div className="flex mt-10 mx-20 space-x-10 justify-center items-center ">
          <div className="text-6xl font-bold text-left bg-gradient-to-b from-amber-350 to-red-700 rounded-3xl p-10">
            Schedule and Plan Tasks <br />with Your Roommates
          </div>
          <Image src={LandingLogo} alt="Landing Logo" width={600} height={600} />
        </div>
      </div>
      <div className="bg-white h-[600px]">

      </div>
      <div className="bg-black h-[400px]">

      </div>
    </div>
  );

}
