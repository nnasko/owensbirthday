import Image from "next/image";
import React from 'react';
import CountdownComponent from "./components/CountdownComponent";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-neutral-400 to-neutral-700 justify-between p-24">
      <CountdownComponent />
    </main>
  );
}
