import React from "react";
import { ArrowRight, Globe, Layers, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/common/Button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-100 -skew-x-12 opacity-50 transform origin-top-right z-0" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 md:px-8 xl:px-16 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl xl:text-5xl font-black text-professional leading-tight mb-5"
            >
              Menjembatani <span className="text-primary italic">Anda</span> <br />
              <span className="text-gold">dengan Teknologi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-professional/70 max-w-lg mb-8 mx-auto lg:mx-0 leading-relaxed"
            >
              "From Idea to Real-World Solutions". Kami menghadirkan inovasi terintegrasi software dan hardware untuk transformasi bisnis Anda yang tak terbatas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" icon={ArrowRight} onClick={() => window.location.href = "#contact"}>
                Mulai Proyek
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "#services"}>
                Kenali Layanan Kami
              </Button>
            </motion.div>

            {/* Quick Stats/Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-8 border-t border-slate-200 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="text-left font-bold text-sm text-professional/80">World Class Standard</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-gold border border-slate-100">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-left font-bold text-sm text-professional/80">Scalable Systems</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary/80 border border-slate-100">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-left font-bold text-sm text-professional/80">Hardware-Software Fusion</div>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          <div className="flex-1 relative order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square  md:w-[500px] md:h-[500px]"
            >
              {/* Futuristic Circle Animation */}
              <div className="absolute inset-0 border-2 border-primary/20 border-dashed rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border-2 border-gold/20 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              {/* Floating Content Mimicking Technology */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-4/5 h-4/5 bg-gradient-to-tr from-primary to-gold rounded-[40px] shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-professional opacity-20 transition-opacity group-hover:opacity-10" />
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                    alt="Technology"
                    className="w-full h-full object-cover grayscale mix-blend-overlay hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.div>

              {/* Badge Decorations */}
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-dark p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gold rounded-lg text-white"><ArrowRight className="w-4 h-4" /></div>
                  <div className="text-xs font-black uppercase text-white">Innovation First</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-xl z-20 border-primary/20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-lg text-white"><Cpu className="w-4 h-4" /></div>
                  <div className="text-xs font-black uppercase text-professional">Smart Solution</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
