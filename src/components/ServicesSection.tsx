import React from 'react';
import { FadeIn } from './ui';

export const ServicesSection: React.FC = () => {
  const services = [
    { number: "01", name: "3D Modeling", desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations." },
    { number: "02", name: "Rendering", desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life." },
    { number: "03", name: "Motion Design", desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences." },
    { number: "04", name: "Branding", desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence." },
    { number: "05", name: "Web Design", desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience." }
  ];

  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 overflow-hidden">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
        Services
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((item, index) => (
          <FadeIn key={item.number} delay={index * 0.1} y={20}>
            <div className="flex flex-row items-center border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 gap-6 sm:gap-10 md:gap-16">
              <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none shrink-0">
                {item.number}
              </div>
              <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
                <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] leading-none">
                  - {item.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60">
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
