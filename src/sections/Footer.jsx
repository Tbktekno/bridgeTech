import React from "react";
import { ArrowRight, Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Rocket, Facebook, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/common/Button";

const Footer = () => {
   return (
      <footer className="relative bg-white pt-10 pb-12 overflow-hidden border-t border-slate-100">
         <div className="container mx-auto px-4 md:px-8 xl:px-16 max-w-7xl relative z-10">

            {/* Pre-footer CTA */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="bg-professional rounded-[24px] p-8 md:p-12 mb-16 text-center relative overflow-hidden group shadow-2xl"
            >
               <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-gold/20 transition-colors duration-1000" />

               <h2 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight italic">
                  Siap Memulai Proyek <span className="text-gold">Masa Depan</span> Anda?
               </h2>
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button variant="gold" size="lg" className="rounded-xl px-10" icon={ArrowRight}>
                     Konsultasi Sekarang
                  </Button>
                  <div className="text-white/40 text-sm font-medium">Bebas Biaya Konsultasi Pertama</div>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
               {/* Brand Info */}
               <div className="lg:col-span-4 space-y-6">
                  <a href="#" className="flex items-center gap-2 group">
                     <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-gold transition-colors duration-300">
                        <Rocket className="w-5 h-5" />
                     </div>
                     <span className="text-2xl font-black tracking-tighter uppercase text-professional">
                        Bridge <span className="text-primary group-hover:text-gold transition-colors">Tech</span>
                     </span>
                  </a>
                  <p className="text-professional/60 text-sm leading-relaxed max-w-sm italic">
                     "From Idea to Real-World Solutions". Kami adalah mitra teknologi Anda dalam membangun solusi software, hardware, dan IoT yang terintegrasi dan berkelas dunia.
                  </p>
                  <div className="flex gap-4">
                     {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-professional/40 hover:bg-primary hover:text-white transition-all shadow-sm">
                           <Icon className="w-5 h-5" />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Quick Links */}
               <div className="lg:col-span-2 space-y-6">
                  <h4 className="text-base font-black text-professional uppercase tracking-widest flex items-center gap-2">
                     Quick Links
                     <div className="w-6 h-0.5 bg-gold" />
                  </h4>
                  <ul className="space-y-3">
                     {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                        <li key={item}>
                           <a href="#" className="text-professional/60 text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                              <div className="w-1 h-1 bg-slate-200 rounded-full group-hover:bg-gold transition-colors" />
                              {item}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Services */}
               <div className="lg:col-span-3 space-y-6">
                  <h4 className="text-base font-black text-professional uppercase tracking-widest flex items-center gap-2">
                     Layanan
                     <div className="w-6 h-0.5 bg-gold" />
                  </h4>
                  <ul className="space-y-3">
                     {['Web Development', 'Mobile App Dev', 'IoT Solutions', 'Embedded Systems', 'Consulting'].map((item) => (
                        <li key={item}>
                           <a href="#" className="text-professional/60 text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                              <div className="w-1 h-1 bg-slate-200 rounded-full group-hover:bg-gold transition-colors" />
                              {item}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact Info */}
               <div className="lg:col-span-3 space-y-6">
                  <h4 className="text-base font-black text-professional uppercase tracking-widest flex items-center gap-2">
                     Contact
                     <div className="w-6 h-0.5 bg-gold" />
                  </h4>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-4 text-professional/60 group">
                        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                           <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs leading-relaxed">Kendari, Sulawesi Tenggara, <br /> Indonesia</span>
                     </li>
                     <li className="flex items-center gap-4 text-professional/60 group">
                        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                           <Mail className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs">hello@bridgetech.com</span>
                     </li>
                     <li className="flex items-center gap-4 text-professional/60 group">
                        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                           <Phone className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs">+62 812 3456 7890</span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="text-professional/30 text-xs font-bold uppercase tracking-widest">
                  © {new Date().getFullYear()} Bridge Tech. All Rights Reserved.
               </div>
               <div className="flex gap-8 text-[10px] font-black uppercase tracking-tighter text-professional/20">
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
