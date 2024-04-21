"use client";
import { useEffect, useState } from 'react';
import NavBar from "./components/navbar";

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
        <div className="flex">
          <div>
            Schedule and Plan Tasks with Your Roommates
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className="bg-white h-[300px]">

      </div>
    </div>
  );
}
