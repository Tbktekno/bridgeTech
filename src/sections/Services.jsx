import React from "react";
import { Code2, Smartphone, Cpu, Settings, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";
import { cn } from "../utils/cn";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      desc: "Membangun platform bisnis online yang responsif, cepat, dan SEO-friendly dengan teknologi framework terkini.",
      icon: Code2,
      color: "blue"
    },
    {
       title: "App Development",
       desc: "Solusi aplikasi mobile (iOS & Android) yang intuitif, scalable, dan memiliki user experience yang mulus.",
       icon: Smartphone,
       color: "gold"
    },
    {
       title: "IoT & Embedded Systems",
       desc: "Integrasi sensor, mikrokontroler, dan cloud storage untuk automasi industri dan smart solutions.",
       icon: Cpu,
       color: "blue"
    },
    {
       title: "Integrated Solutions",
       desc: "Custom software architecture yang menghubungkan sistem hardware dengan dashboard analytics real-time.",
       icon: Settings,
       color: "gold"
    }
  ];

  return (
    <Section 
      id="services" 
      bg="white"
      subtitle="Apa Yang Kami Berikan" 
      title="Layanan Inovasi Masa Depan"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-full flex flex-col p-8 bg-white border border-slate-100 rounded-[24px] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 overflow-hidden"
          >
             {/* Background Decoration */}
             <div className={cn(
               "absolute -right-8 -bottom-8 w-24 h-24 rounded-full transition-transform duration-500 group-hover:scale-150 z-0",
               service.color === "blue" ? "bg-primary/5" : "bg-gold/5"
             )} />
             
             {/* Icon */}
             <div className={cn(
               "w-12 h-12 rounded-[16px] shadow-lg flex items-center justify-center mb-6 relative z-10 transition-colors duration-300",
               service.color === "blue" ? "bg-primary text-white" : "bg-gold text-white"
             )}>
                <service.icon className="w-6 h-6" />
             </div>
             
             {/* Text Content */}
             <div className="relative z-10 flex-grow">
                <h3 className="text-lg font-black text-professional mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-professional/60 text-sm leading-relaxed mb-6">{service.desc}</p>
             </div>

             {/* Link Decoration */}
             <div className="relative z-10 flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase group-hover:text-gold transition-colors">
                Selengkapnya <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
             </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
