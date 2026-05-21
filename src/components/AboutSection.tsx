import React from 'react';
import { FadeIn, AnimatedText, ContactButton, Magnet } from './ui';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen relative px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">

        {/* Left Content (Text) */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-8 sm:gap-12 md:max-w-xl">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,8vw,120px)]">
              About me
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} y={40} className="w-full flex justify-center md:justify-start">
            <AnimatedText 
              text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!" 
              className="text-[#D7E2EA] font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)] justify-center md:justify-start"
            />
          </FadeIn>

          <FadeIn delay={0.3} y={40}>
            <ContactButton />
          </FadeIn>
        </div>

        {/* Right Content (Character Image) */}
        <div className="flex-1 w-full flex justify-center md:justify-end items-center relative">
          <FadeIn delay={0.4} x={40} className="w-[70%] sm:w-[60%] md:w-[80%] lg:w-[90%] xl:w-full max-w-[600px]">
            <Magnet padding={100} strength={3}>
              <img 
                src="https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png" 
                alt="Jack 3D Character" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </Magnet>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
