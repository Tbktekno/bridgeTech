import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import Button from "./Button";
import Logo from "/logoBridgeTech.webp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Feedback", href: "#feedback" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 px-4 md:px-8 xl:px-16",
        scrolled ? "glass shadow-md py-2" : "bg-white border-b-2 border-b-blue-400"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">

          <img src={Logo} alt="Logo" className="w-20 h-12" />

        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-professional/80 hover:text-primary font-bold transition-colors text-[10px] uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-professional p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-transparent overflow-hidden border-t mt-3"
          >
            <div className="flex flex-col p-5 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-professional font-bold text-sm uppercase tracking-widest py-2 border-b border-slate-50 last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full text-xs py-3 mt-2" onClick={() => setMobileMenuOpen(false)}>
                Mulai Proyek
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
