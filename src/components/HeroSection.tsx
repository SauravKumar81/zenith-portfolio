import React from 'react';
import { FadeIn, Magnet, ContactButton } from './ui';
import { Navbar } from './Navbar';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen overflow-x-clip relative">
      <Navbar />
      
      {/* Character Image (Behind the text, shifted up slightly but clear of navbar) */}
      <FadeIn 
        delay={0.6} 
        y={30} 
        className="absolute top-[48%] md:top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[60vh] sm:h-[65vh] md:h-[75vh] pointer-events-none flex items-center justify-center mt-4 sm:mt-6"
      >
        <div className="pointer-events-auto h-full w-full flex items-center justify-center">
          <Magnet padding={150} strength={3}>
            <img 
              src="https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png" 
              alt="Jack Portrait" 
              className="h-full w-auto object-contain drop-shadow-2xl"
            />
          </Magnet>
        </div>
      </FadeIn>

      {/* Centered Heading (In front of the image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 md:px-10 z-10 pointer-events-none text-center">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[16vw]">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>
      </div>
      
      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
