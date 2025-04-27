'use client';
import Banner from "@/components/Banner";
import Ireca from "@/components/Ireca";
import { Caveat } from "next/font/google"

const caveat = Caveat({ subsets: ["latin"] })


export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-white overflow-hidden">
      {/* Banner */}
      <Banner />

      {/* Ireca */}
      <Ireca />
    </main >
  );
}