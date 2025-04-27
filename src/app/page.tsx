'use client';
import Banner from "@/components/Banner";
import Ireca from "@/components/Ireca";
import Pincel from "@/components/Pincel";
import ColorBar from "@/components/ColorBar";

import { Caveat } from "next/font/google"
import Declaracion from "@/components/Declaracion_Intenciones";

const caveat = Caveat({ subsets: ["latin"] })


export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-white overflow-hidden">

      {/* Banner */}
      <Banner />

      {/* Banner */}
      <Declaracion />


      {/* Ireca */}
      <Ireca />

      {/* Pincel */}
      <Pincel />

      {/* Pincel */}
      <ColorBar />
      
    </main >
  );
}