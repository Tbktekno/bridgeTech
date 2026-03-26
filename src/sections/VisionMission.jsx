import React from "react";
import { Target, Compass, Globe, Sparkles, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";

const VisionMission = () => {
  const testimonials = [
    {
      name: "Andi Wijaya",
      role: "CEO TechInnovate",
      content: "Bridge Tech mengubah cara kami memandang integrasi sistem. Dashboard yang mereka bangun sangat intuitif dan membantu efisiensi operasional kami hingga 40%.",
      avatar: "https://i.pravatar.cc/150?u=andi"
    },
    {
      name: "Siska Pratama",
      role: "Founder SmartHome ID",
      content: "Layanan IoT mereka benar-benar beyond expectations. Dari prototipe hardware hingga aplikasi kontrol, semuanya berjalan mulus dan stabil.",
      avatar: "https://i.pravatar.cc/150?u=siska"
    }
  ];

  return (
    <Section 
      id="vision" 
      bg="dark"
      subtitle="Filosofi Kami" 
      title="Visi & Misi Bridge Tech"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
         {/* Vision & Mission */}
         <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
               <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary rounded-xl text-white group-hover:bg-gold transition-colors">
                     <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black italic">Visi Kami</h3>
               </div>
               <p className="text-lg text-white/70 leading-relaxed font-medium">
                  Menjadi jembatan teknologi terdepan di Asia Tenggara yang menghadirkan solusi inovatif, terintegrasi, dan berkelanjutan untuk meningkatkan kualitas hidup dan bisnis di era digital.
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
               <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold rounded-xl text-white group-hover:bg-primary transition-colors">
                     <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black italic">Misi Kami</h3>
               </div>
               <ul className="space-y-4 text-sm">
                  {[
                    "Menghadirkan produk teknologi berkualitas tinggi dengan standar global.",
                    "Mengintegrasikan software dan hardware secara mulus untuk efisiensi maksimal.",
                    "Membangun ekosistem teknologi yang scalable dan adaptif bagi pertumbuhan klien.",
                    "Menciptakan inovasi yang ramah pengguna dan memberikan nilai tambah nyata."
                  ].map((misi, i) => (
                    <li key={i} className="flex gap-4 items-start text-white/60">
                       <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gold" />
                       <span className="flex-grow">{misi}</span>
                    </li>
                  ))}
               </ul>
            </motion.div>
         </div>

         {/* Testimonials */}
         <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] z-0" />
            
            <div className="relative z-10 space-y-8">
               <div className="mb-10">
                  <h4 className="text-gold font-black uppercase tracking-widest text-sm mb-4">Apa Kata Client?</h4>
                  <h3 className="text-4xl font-black mb-8 italic">Pujian Untuk Dedikasi Kami</h3>
               </div>
               
               {testimonials.map((testi, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: index * 0.2 }}
                   viewport={{ once: true }}
                   className="glass-dark p-8 rounded-[24px] border-white/5 relative group"
                 >
                    <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 group-hover:text-gold/20 transition-colors" />
                    
                    <div className="flex gap-1 mb-4 text-gold">
                       {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-current" />)}
                    </div>
                    
                    <p className="text-base text-white/80 italic leading-relaxed mb-8">
                       "{testi.content}"
                    </p>
                    
                    <div className="flex items-center gap-5">
                       <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-xl grayscale hover:grayscale-0 transition-all border border-white/10" />
                       <div>
                          <div className="text-lg font-black text-white">{testi.name}</div>
                          <div className="text-primary font-bold text-[10px] tracking-widest uppercase">{testi.role}</div>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </div>
    </Section>
  );
};

export default VisionMission;
