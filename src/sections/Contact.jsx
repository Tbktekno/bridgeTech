import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import { cn } from "../utils/cn";

const Contact = () => {
   const [formState, setFormState] = useState({
      name: "",
      email: "",
      message: ""
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      // Simulate email sending via mailto link
      const mailtoLink = `mailto:hello@bridgetech.com?subject=Project Inquiry from ${formState.name}&body=${formState.message}`;
      window.location.href = mailtoLink;
   };

   const contactOptions = [
      {
         icon: MessageSquare,
         title: "WhatsApp Chat",
         value: "+62 812-3456-7890",
         link: "https://wa.me/6281234567890",
         color: "text-green-500",
         bgColor: "bg-green-500/10"
      },
      {
         icon: Mail,
         title: "Email Inquiry",
         value: "hello@bridgetech.com",
         link: "mailto:hello@bridgetech.com",
         color: "text-primary",
         bgColor: "bg-primary/10"
      },
      {
         icon: MapPin,
         title: "Office Location",
         value: "Kendari, Sulawesi Tenggara",
         link: "#",
         color: "text-gold",
         bgColor: "bg-gold/10"
      }
   ];

   return (
      <Section
         id="contact"
         bg="slate"
         subtitle="Hubungi Kami"
         title="Mulai Perjalanan Teknologi Anda"
      >
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact info cards */}
            <div className="lg:col-span-5 space-y-8">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
               >
                  <h3 className="text-2xl font-black italic text-professional mb-4 underline decoration-gold decoration-4 underline-offset-8">Ayo Berkolaborasi</h3>
                  <p className="text-professional/60 leading-relaxed mb-6 text-base">
                     "From Idea to Real-World Solutions". Tim ahli kami siap membantu Anda menjembatani visi kreatif dengan ekosistem teknologi yang stabil dan scalable.
                  </p>
               </motion.div>

               <div className="space-y-4">
                  {contactOptions.map((option, index) => (
                     <motion.a
                        key={index}
                        href={option.link}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex items-center p-4 bg-white rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-white/50"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform", option.bgColor, option.color)}>
                           <option.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                           <div className="text-xs font-black uppercase tracking-widest text-professional/30 mb-1">{option.title}</div>
                           <div className="text-lg font-bold text-professional truncate">{option.value}</div>
                        </div>
                        <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <ExternalLink className="w-4 h-4 text-primary" />
                        </div>
                     </motion.a>
                  ))}
               </div>

               {/* Stats Badge */}
               <div className="p-8 glass-dark rounded-[40px] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-full bg-primary/20 -skew-x-12 transform origin-right" />
                  <div className="relative z-10 flex items-center gap-6">
                     <div className="text-5xl font-black text-white italic">24<span className="text-gold">/7</span></div>
                     <div className="text-white/60 font-bold uppercase tracking-widest text-xs leading-relaxed">
                        Dukungan Konsultasi <br /> <span className="text-gold">Online Prioritas</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <motion.div
               className="lg:col-span-7 bg-white p-10 lg:p-12 rounded-[24px] shadow-2xl border border-slate-100 relative overflow-hidden"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
            >
               {/* Form background ornament */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl animate-pulse" />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

               <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-professional/50 ml-4">Nama Lengkap</label>
                        <input
                           type="text"
                           required
                           placeholder="Contoh: Budi Santoso"
                           className="w-full px-6 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm text-professional font-medium placeholder:text-professional/20"
                           onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-professional/50 ml-4">Alamat Email</label>
                        <input
                           type="email"
                           required
                           placeholder="budi@email.com"
                           className="w-full px-6 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm text-professional font-medium placeholder:text-professional/20"
                           onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-professional/50 ml-4">Pesan Anda</label>
                     <textarea
                        rows="4"
                        required
                        placeholder="Ceritakan sedikit tentang proyek masa depan Anda..."
                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm text-professional font-medium placeholder:text-professional/20 resize-none"
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                     ></textarea>
                  </div>

                  <div className="pt-4">
                     <Button
                        size="md"
                        className="w-full py-5 text-lg rounded-xl"
                        icon={Send}
                        type="submit"
                     >
                        Kirim Pesan
                     </Button>
                     <div className="text-center mt-4">
                        <p className="text-xs text-professional/40 flex items-center justify-center gap-2">
                           <Sparkles className="w-4 h-4 text-gold" />
                           Kami biasanya membalas dalam waktu kurang dari 24 jam.
                        </p>
                     </div>
                  </div>
               </form>
            </motion.div>
         </div>
      </Section>
   );
};

export default Contact;
