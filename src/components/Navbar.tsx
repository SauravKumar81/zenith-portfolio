import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['About', 'Price', 'Projects', 'Contact'];

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 0.7 }}
        className="absolute top-0 left-0 w-full z-50 px-6 md:px-10 pt-6 md:pt-8"
      >
        <div className="flex items-center justify-start w-full">
          
          {/* Desktop Nav - Pill Style */}
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center px-6 md:px-8 py-3.5 rounded-full bg-[#ffffff]/[0.03] backdrop-blur-2xl border border-[#ffffff]/10 shadow-lg w-max">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-sm lg:text-base hover:opacity-70 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Mobile Nav Header - Pill Style */}
          <div className="md:hidden flex gap-4 w-max items-center rounded-full bg-[#ffffff]/[0.03] backdrop-blur-2xl border border-[#ffffff]/10 px-5 py-3 shadow-lg relative z-[80]">
             <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs">Jack</span>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#D7E2EA] relative flex items-center justify-center w-5 h-5"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-[#0C0C0C]/80 backdrop-blur-md z-[60] md:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75vw] max-w-[320px] bg-[#0c0c0c] border-l border-[#ffffff]/10 z-[70] md:hidden flex flex-col p-8 pt-32 shadow-2xl"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="text-[#D7E2EA] font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
