import React from "react";
import { Laptop, Smartphone, Eye, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";

const Portfolio = () => {
  const projects = [
    {
      title: "Smart Logistics Dashboard",
      tag: "Software + IoT",
      desc: "Platform monitoring pengiriman barang real-time terintegrasi dengan sensor suhu dan lokasi.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      type: "Web Application"
    },
    {
      title: "BioHealth Tracker",
      tag: "Mobile App",
      desc: "Aplikasi pelacak kesehatan yang terhubung dengan wearable devices kustom buatan kami.",
      image: "https://images.unsplash.com/photo-1576091160550-21735999181c?auto=format&fit=crop&q=80&w=800",
      type: "App Design"
    },
    {
      title: "Retail Automation Hub",
      tag: "Hardware + Cloud",
      desc: "Sistem checkout otomatis menggunakan teknologi RFID dan integrasi database cloud yang aman.",
      image: "https://images.unsplash.com/photo-1556742049-63ffb5d1ea31?auto=format&fit=crop&q=80&w=800",
      type: "Integrated Systems"
    }
  ];

  return (
    <Section 
      id="portfolio" 
      bg="slate"
      subtitle="Karya Kami" 
      title="Real-World Solutions Created"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-[24px] shadow-sm transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden border border-slate-100"
          >
             {/* Image Container with Overlay */}
             <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-professional/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center p-6">
                   <div className="flex gap-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-xl hover:bg-gold hover:text-white transition-colors">
                         <Eye className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-xl hover:bg-gold hover:text-white transition-colors">
                         <ExternalLink className="w-5 h-5" />
                      </div>
                   </div>
                </div>
                {/* Badge Tag */}
                <div className="absolute top-4 left-4 py-1.5 px-4 bg-white/90 glass text-primary font-black uppercase text-[8px] tracking-widest rounded-full shadow-lg">
                   {project.tag}
                </div>
             </div>

             {/* Content Area */}
             <div className="p-6">
                <div className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">{project.type}</div>
                <h3 className="text-lg font-black text-professional mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
                <p className="text-professional/60 text-sm leading-relaxed line-clamp-2">{project.desc}</p>
                {/* Visual Line */}
                <div className="mt-6 w-10 h-1 bg-slate-100 rounded-full group-hover:bg-primary transition-colors group-hover:w-full duration-700" />
             </div>
          </motion.div>
        ))}
      </div>
      
      {/* Portfolio CTA */}
      <div className="mt-16 text-center">
         <motion.button 
           whileHover={{ scale: 1.05 }}
           className="inline-flex items-center gap-3 text-professional font-black uppercase text-sm tracking-widest group border-b-2 border-primary/20 hover:border-primary pb-2 transition-all"
         >
            Lihat Semua Project <ExternalLink className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
         </motion.button>
      </div>
    </Section>
  );
};

export default Portfolio;
