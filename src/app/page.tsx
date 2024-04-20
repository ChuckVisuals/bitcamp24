"use client";
import { useEffect, useState } from 'react';
import NavBar from "./components/navbar";
import DashBoardImage from "public/images/DashBoardPanel1.jpg"

export default function Home() {

  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    fetch('https://bitcamp-backend.vercel.app/test')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (

    <main className="">
      <NavBar />
      <div className="bg-gradient-to-t from-pink-950 to-rose-600 h-[600px]">
        <img src="https://images.pexels.com/photos/376533/pexels-photo-376533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="500" height="500" className="rounded-sm" />
      </div>
      <div className="bg-pink-400 h-[400px] mt-10 mx-5 rounded-lg">
      </div>
      <div className="bg-blue-300">
        {data && <div>{data}</div>}
      </div>
    </main>
  );

}
