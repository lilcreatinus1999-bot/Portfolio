import React from "react";
import { FadeIn } from "../ui/FadeIn";
import { Magnet } from "../ui/Magnet";
import { ContactButton } from "../ui/Buttons";

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      {/* Heading */}
      <div className="flex-1 flex flex-col justify-start overflow-hidden z-20">
        <FadeIn delay={0.15} y={40} className="w-full text-center mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[11.5vw] md:text-[12vw] lg:text-[12.5vw]">
            Hi, i&apos;m <span className="text-white" style={{ WebkitTextFillColor: 'white' }}>Michael</span>
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 w-full">
        {/* Empty div to keep ContactButton on the right using justify-between */}
        <div></div>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </FadeIn>
      </div>

      {/* Portrait */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 flex justify-center pointer-events-none z-10">
        <FadeIn 
          delay={0.6} 
          y={30} 
          className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] pointer-events-auto"
        >
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
              alt="Michael Portrait" 
              className="w-full h-auto object-contain"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
