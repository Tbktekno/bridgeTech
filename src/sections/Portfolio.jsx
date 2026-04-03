import React from "react";
import { motion } from "framer-motion";
import { Eye, ExternalLink, Camera } from "lucide-react";
import Section from "../components/common/Section";

// Asset Imports
import Img1 from "../assets/WhatsApp Image 2026-04-02 at 21.51.00.jpeg";
import Img2 from "../assets/WhatsApp Image 2026-04-02 at 21.51.00(1).jpeg";
import Img3 from "../assets/WhatsApp Image 2026-04-02 at 21.51.21 (1).jpeg";
import Img4 from "../assets/WhatsApp Image 2026-04-02 at 21.51.21.jpeg";
import Img5 from "../assets/WhatsApp Image 2026-04-02 at 21.51.22 (1).jpeg";
import Img6 from "../assets/WhatsApp Image 2026-04-02 at 21.51.22 (2).jpeg";
import Img7 from "../assets/WhatsApp Image 2026-04-02 at 21.51.22.jpeg";
import Img8 from "../assets/WhatsApp Image 2026-04-02 at 21.51.23 (1).jpeg";
import Img9 from "../assets/WhatsApp Image 2026-04-02 at 21.51.23 (2).jpeg";
import Img10 from "../assets/WhatsApp Image 2026-04-02 at 21.51.23.jpeg";
import Img11 from "../assets/WhatsApp Image 2026-04-02 at 21.51.25 (1).jpeg";
import Img12 from "../assets/WhatsApp Image 2026-04-02 at 21.51.25.jpeg";
import Img13 from "../assets/WhatsApp Image 2026-04-02 at 21.51.27.jpeg";

const Portfolio = () => {
  const gallery = [
    { src: Img1, category: "Hardware Design", title: "Smart Control Box" },
    { src: Img2, category: "Prototyping", title: "Industrial Node" },
    { src: Img3, category: "Circuit Wiring", title: "Precision Circuit" },
    { src: Img4, category: "Assembly", title: "Component Integration" },
    { src: Img5, category: "Monitoring", title: "Remote Dashboard" },
    { src: Img6, category: "Testing", title: "Validation Phase" },
    { src: Img7, category: "Deployment", title: "Field Installation" },
    { src: Img8, category: "Custom PCB", title: "PCB Architecture" },
    { src: Img9, category: "Network", title: "Connectivity Module" },
    { src: Img11, category: "Hardware", title: "Embedded Systems" },
    { src: Img12, category: "Innovation", title: "Tech Fusion" },
    { src: Img13, category: "Final Build", title: "Product Excellence" },
  ];

  return (
    <Section
      id="portfolio"
      bg="slate"
      subtitle="Dokumentasi Proyek"
      title="Galeri Inovasi Bridge Tech"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {gallery.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 aspect-square"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-professional/90 via-professional/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1 block">
                  {item.category}
                </span>
                <h4 className="text-white font-black text-lg">
                  {item.title}
                </h4>

                <div className="flex gap-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold transition-colors cursor-pointer">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold transition-colors cursor-pointer">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Icon */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/50 group-hover:text-gold transition-colors">
              <Camera className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats/Highlight */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 p-10 bg-professional rounded-[40px] text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Proyek Selesai", value: "50+" },
            { label: "Klien Puas", value: "30+" },
            { label: "Hardware Nodes", value: "200+" },
            { label: "Baris Kode", value: "1M+" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-black text-gold mb-2">{stat.value}</div>
              <div className="text-xs font-bold text-white/50 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Portfolio;
