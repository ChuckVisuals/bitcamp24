"use client";
import { useEffect, useState } from 'react';
import NavBar from "./components/navbar";

export default function Home() {

  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    fetch('https://bitcamp-backend.vercel.app/test')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <div className="bg-blue-300">
        {data && <div>{data}</div>}

      </div>
    </main>
  );
}
