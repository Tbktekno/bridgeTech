import React from "react";
import { User, ShieldCheck, HeartPulse, Puzzle, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import Section from "../components/common/Section";

const About = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Trusted Partner",
      desc: "Menjadi mitra strategis Anda dalam setiap langkah transformasi digital.",
      color: "text-primary"
    },
    {
      icon: Puzzle,
      title: "Seamless Integration",
      desc: "Solusi terintegrasi antara software, hardware, dan IoT yang efisien.",
      color: "text-gold"
    },
    {
       icon: Zap,
       title: "Agile Innovation",
       desc: "Terus berinovasi dengan kecepatan dan kelincahan tim ahli teknologi.",
       color: "text-primary"
    }
  ];

  return (
    <Section 
      id="about" 
      bg="slate"
      subtitle="Tentang Bridge Tech" 
      title="Solusi Integrasi Tanpa Batas"
      centerTitle={false}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="w-full aspect-[4/3] bg-professional rounded-[40px] shadow-2xl overflow-hidden relative group">
             <img 
               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" 
               alt="Team Working" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-professional via-transparent to-transparent opacity-80" />
             
             {/* Text Overlay on image */}
             <div className="absolute bottom-8 left-8 right-8 text-white z-10">
               <div className="text-4xl font-black italic mb-2">Bridge <span className="text-gold">Tech</span></div>
               <p className="text-white/80 font-medium tracking-tight">Menghubungkan masa depan dengan solusi hari ini.</p>
             </div>
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-gold/10 rounded-full animate-pulse" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-black text-professional mb-6 leading-tight">
             Kami Adalah Penghubung Antara <span className="text-primary italic">Ide Kreatif</span> Dan <span className="text-gold">Realisasi Teknologi.</span>
          </h3>
          <p className="text-professional/70 text-base leading-relaxed mb-8">
            Bridge Tech didirikan untuk menjawab tantangan dunia modern yang membutuhkan sinkronisasi sempurna antara perangkat lunak dan perangkat keras. Kami tidak hanya membangun software, kami membangun ekosistem teknologi yang scalable dan berkelanjutan.
          </p>
          
          <div className="space-y-8">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 group"
              >
                <div className={cn("mt-1 p-3 rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:scale-110", item.color)}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-professional mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                   <p className="text-professional/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
