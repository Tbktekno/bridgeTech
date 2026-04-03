import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Database, Smartphone, ArrowUpRight } from "lucide-react";
import Section from "../components/common/Section";
import { cn } from "../utils/cn";

const Projects = () => {
  const projects = [
    {
      title: "Smart Industry 4.0",
      category: "IoT & Automation",
      desc: "Sistem monitoring real-time untuk lini produksi pabrik dengan integrasi sensor suhu, kelembaban, dan beban.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      color: "bg-blue-500"
    },
    {
      title: "AgriTech Solution",
      category: "Hardware & Software",
      desc: "Sistem penyiraman otomatis berbasis kelembaban tanah dan prediksi cuaca melalui dashboard web terpusat.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&q=80&w=800",
      color: "bg-emerald-500"
    },
    {
      title: "Enterprise ERP System",
      category: "Software Development",
      desc: "Platform manajemen inventaris dan keuangan terintegrasi untuk efisiensi operasional bisnis skala besar.",
      icon: Database,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      color: "bg-amber-500"
    },
    {
      title: "Smart Home Hub",
      category: "Consumer IoT",
      desc: "Kontrol pencahayaan, keamanan, dan peralatan rumah tangga melalui aplikasi mobile yang responsif.",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
      color: "bg-purple-500"
    }
  ];

  return (
    <Section 
      id="projects" 
      bg="white"
      subtitle="Portofolio Kami" 
      title="Proyek Yang Telah Kami Realisasikan"
      className="pb-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="aspect-[16/9] overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-professional/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-6 left-6">
                <div className={cn("px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg", project.color)}>
                  {project.category}
                </div>
              </div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white shadow-xl cursor-pointer hover:bg-gold-dark">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                  <project.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-black text-professional group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
              </div>
              <p className="text-professional/60 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
