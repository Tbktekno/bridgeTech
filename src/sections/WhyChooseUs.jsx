import React from "react";
import { CheckCircle, ShieldCheck, Cpu, Database, Users, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";
import { cn } from "../utils/cn";

const WhyChooseUs = () => {
  const perks = [
    {
      title: "Integrasi Software & Hardware",
      desc: "Keahlian unik dalam menghubungkan kode dengan perangkat fisik untuk solusi nyata yang terintegrasi.",
      icon: Cpu,
      color: "bg-primary"
    },
    {
      title: "Tim Profesional & Expert",
      desc: "Dikembangkan oleh engineer berpengalaman yang fokus pada kualitas tinggi dan standar global.",
      icon: Users,
      color: "bg-gold"
    },
    {
       title: "Scalable & Reliable System",
       desc: "Arsitektur sistem yang dirancang untuk tumbuh bersama bisnis Anda tanpa hambatan performa.",
       icon: Database,
       color: "bg-primary"
    },
    {
       title: "Keamanan Data Prioritas",
       desc: "Setiap solusi kami dilengkapi dengan standar enkripsi dan keamanan data tingkat tinggi.",
       icon: ShieldCheck,
       color: "bg-gold"
    }
  ];

  return (
    <Section 
      id="why-choose-us" 
      bg="white"
      subtitle="Keunggulan Bridge Tech" 
      title="Mengapa Memilih Kami?"
      className="pb-32"
    >
      <div className="flex flex-col lg:flex-row gap-16 items-stretch">
        {/* Visual Content */}
        <div className="flex-1 relative flex items-center justify-center p-8 bg-slate-50 rounded-[48px] overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 blur-3xl bg-primary/20 rotate-45 transform translate-x-1/2" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 w-full max-w-[360px]"
          >
             <div className="relative glass shadow-2xl p-8 rounded-[24px] border-primary/10 overflow-hidden group">
                {/* Decoration Icons floating */}
                <div className="absolute top-8 right-8 opacity-30 animate-bounce transition-all">
                   <Sparkles className="w-6 h-6 text-gold" />
                </div>
                
                <h3 className="text-xl font-black text-professional mb-6 leading-tight italic">
                   The Golden Bridge <br /> <span className="text-primary italic">To Excellence.</span>
                </h3>
                
                <div className="space-y-6">
                   {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                         <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                         </div>
                         <div className="h-2 flex-grow bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${80 - i*15}%` }}
                              transition={{ duration: 1.5, delay: i * 0.2 }}
                              viewport={{ once: true }}
                              className="h-full bg-primary"
                            />
                         </div>
                      </div>
                   ))}
                </div>

                <div className="mt-12 text-center">
                   <div className="text-5xl font-black text-professional flex items-center justify-center gap-2">
                      99<span className="text-primary">%</span>
                   </div>
                   <div className="text-sm font-bold uppercase tracking-widest text-professional/50 mt-2">Client Satisfaction</div>
                </div>
             </div>
             
             {/* Floating Icon Badges */}
             <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/50 glass shadow-xl rounded-2xl flex items-center justify-center p-5 text-primary rotate-12 transition-transform hover:rotate-0">
                <TrendingUp className="w-10 h-10" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/50 glass shadow-xl rounded-2xl flex items-center justify-center p-5 text-gold -rotate-12 transition-transform hover:rotate-0">
                <CheckCircle className="w-10 h-10" />
             </div>
          </motion.div>
        </div>

        {/* Perks Content */}
        <div className="flex-1 flex flex-col justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {perks.map((perk, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                   <div className={cn("inline-flex p-2.5 rounded-xl shadow-lg text-white mb-4 transform transition-transform group-hover:scale-110", perk.color)}>
                      <perk.icon className="w-5 h-5" />
                   </div>
                   <h4 className="text-lg font-black text-professional mb-2 group-hover:text-primary transition-colors underline decoration-transparent decoration-2 underline-offset-4 group-hover:decoration-gold">{perk.title}</h4>
                   <p className="text-professional/60 leading-relaxed text-xs">{perk.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
