import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, HTMLMotionProps } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const ContactButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <button
    className={`relative flex flex-row items-center justify-between rounded-[40px] p-2 transition-transform duration-200 active:scale-[0.98] w-max group shadow-2xl shadow-black/40 ${className}`}
    style={{
      background: '#EAEBEF',
      boxShadow: 'inset 5px 5px 10px #c3c4c9, inset -5px -5px 10px #ffffff',
      border: '1px solid rgba(255,255,255,0.4)',
    }}
  >
    <span className="font-medium text-[#4A4B50] px-5 sm:px-7 md:px-9 text-[14px] sm:text-[16px] md:text-[18px] whitespace-nowrap">
      Contact Me
    </span>
    <div
      className="flex items-center justify-center rounded-full aspect-square h-10 sm:h-12 md:h-14 transition-transform duration-300 group-hover:scale-95"
      style={{
        background: '#EAEBEF',
        boxShadow: '4px 4px 10px #c3c4c9, -4px -4px 10px #ffffff, inset 1px 1px 2px rgba(255,255,255,0.8)'
      }}
    >
      <ArrowRight strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A4B50]" />
    </div>
  </button>
);

export const LiveProjectButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <button
    className={`relative flex flex-row items-center justify-between rounded-[40px] p-1.5 sm:p-2 transition-transform duration-200 active:scale-[0.98] w-max group shadow-2xl shadow-black/40 ${className}`}
    style={{
      background: '#EAEBEF',
      boxShadow: 'inset 4px 4px 8px #c3c4c9, inset -4px -4px 8px #ffffff',
      border: '1px solid rgba(255,255,255,0.4)',
    }}
  >
    <span className="font-medium text-[#4A4B50] px-4 sm:px-6 md:px-8 text-[12px] sm:text-[14px] md:text-[15px] whitespace-nowrap">
      Live Project
    </span>
    <div
      className="flex items-center justify-center rounded-full aspect-square h-8 sm:h-10 md:h-11 transition-transform duration-300 group-hover:scale-95"
      style={{
        background: '#EAEBEF',
        boxShadow: '3px 3px 8px #c3c4c9, -3px -3px 8px #ffffff, inset 1px 1px 2px rgba(255,255,255,0.8)'
      }}
    >
      <ArrowUpRight strokeWidth={2.5} className="w-4 h-4 sm:w-5 sm:h-5 text-[#4A4B50]" />
    </div>
  </button>
);

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "as"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: any;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  ...props
}) => {
  const Component = motion.create(as as any);
  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};

export const Magnet: React.FC<{ children: React.ReactElement; padding?: number; strength?: number; activeTransition?: string; inactiveTransition?: string; className?: string }> = ({
  children, padding = 150, strength = 3, activeTransition = "transform 0.3s ease-out", inactiveTransition = "transform 0.6s ease-in-out", className = ""
}) => {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetRef.current) return;
    const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = Math.abs(e.clientX - centerX);
    const distanceY = Math.abs(e.clientY - centerY);
    if (distanceX < (width / 2 + padding) && distanceY < (height / 2 + padding)) {
      setIsActive(true);
      setPosition({ x: (e.clientX - centerX) / strength, y: (e.clientY - centerY) / strength });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div
      ref={magnetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setIsActive(false); setPosition({ x: 0, y: 0 }); }}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

export const AnimatedText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.2'] });
  const characters = text.split('');

  return (
    <p ref={containerRef} className={`flex flex-wrap relative ${className}`}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        return (
          <span key={i} className="relative">
            <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
            <motion.span className="absolute left-0 top-0" style={{ opacity }}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
