import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ExternalLink, Camera, ChevronLeft, ChevronRight } from "lucide-react";
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
  const scrollRef = useRef(null);

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

  const [mobileIndex, setMobileIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setMobileIndex((prev) => (prev + newDirection + gallery.length) % gallery.length);
  };

  return (
    <Section
      id="portfolio"
      bg="slate"
      subtitle="Dokumentasi Proyek"
      title="Galeri Inovasi Bridge Tech"
    >
      {/* Mobile 3D Cylinder Carousel */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden sm:hidden group/portfolio">
        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-30 pointer-events-none">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-professional pointer-events-auto active:scale-90 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-professional pointer-events-auto active:scale-90 transition-transform"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="relative w-full h-full flex items-center justify-center perspective-[1500px]">
          <AnimatePresence initial={false} custom={direction}>
            {[-1, 0, 1].map((offset) => {
              const itemIndex = (mobileIndex + offset + gallery.length) % gallery.length;
              const item = gallery[itemIndex];
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={`${itemIndex}-${offset}`}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    x: offset * 200,
                    rotateY: offset * 45,
                    z: -200
                  }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1 : 0.7,
                    x: offset * 260,
                    rotateY: offset * -35,
                    z: isCenter ? 0 : -150,
                    zIndex: isCenter ? 20 : 10,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    x: (offset - direction) * 200,
                    rotateY: (offset - direction) * -45,
                    z: -300
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;
                    if (swipe < -50) paginate(1);
                    else if (swipe > 50) paginate(-1);
                  }}
                  className="absolute w-[340px] aspect-[4/4] bg-white rounded-[40px] shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                >
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Overlay for Center Item */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-professional/90 via-professional/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-white font-black text-xl mb-4">
                      {item.title}
                    </h4>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold transition-colors">
                        <Eye className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Icon for Center Item */}
                  {isCenter && (
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/50">
                      <Camera className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 flex gap-2 z-30">
          {gallery.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === mobileIndex ? 'w-8 bg-gold' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        className="mt-10 md:mt-20 py-10 px-5 bg-professional rounded-[40px] text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative z-10 grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-8">
          {[
            { label: "Proyek Selesai", value: "50+" },
            { label: "Klien Puas", value: "30+" },
            { label: "Hardware Nodes", value: "200+" },
            { label: "Baris Kode", value: "1M+" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-lg md:text-4xl font-black text-gold mb-2">{stat.value}</div>
              <div className="text-[9px] font-bold text-white/50 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Portfolio;
