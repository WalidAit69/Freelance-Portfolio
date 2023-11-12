"use client";

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Parallax from "@/components/parallax/Parallax";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";

export default function Home() {

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">

        <Hero />
        <Parallax type={"services"} />
        <Skills />
        <Encryption />
        <Parallax type={"projects"} />
        <Projects />
        <Contact />        
        <Footer />
      </div>
    </main>
  );
}
