import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/common/Button";
import HeroParticles from "../components/animations/HeroParticles";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-end justify-center pb-24 lg:pb-10 pt-28 lg:pt-20 overflow-hidden text-center bg-slate-950"
    >
      {/* Texture Background Image (Subtle) */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("/background-bridge-tech.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

      {/* Three.js Particle & Chip Animation */}
      <HeroParticles />

      <div className="container mx-auto px-4 md:px-8 xl:px-16 max-w-7xl relative z-30">
        <div className="flex flex-col justify-end items-center gap-6">
          {/* Main Content Area */}
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-4 drop-shadow-lg"
            >
              Bridge <span className="text-gold">Tech</span> <br className="hidden md:block" />

            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-md"
            >
              Transformasi bisnis melalui integrasi hardware dan software yang inovatif.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" icon={ArrowRight} onClick={() => window.location.href = "#contact"}>
                Mulai Proyek
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
                onClick={() => window.location.href = "#services"}
              >
                Layanan Kami
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
