'use client';

import About from "@/components/sections/About";
import Home from "@/components/sections/Home";
import Header from "@/components/ui/header";

export default function Hero() {
  return (
    <section className=" overflow-auto h-screen">
      <Header/>
      <div className="flex flex-col w-full">
      <Home/>
      <About/>
      </div>
    </section>
  );
}
