import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Phone, Briefcase, MessageSquare, Star } from "lucide-react";
import Section from "../components/common/Section";
import initialKritik from "../data/kritik.json";

const Feedback = () => {
    const [formData, setFormData] = useState({
        nama: "",
        phone: "",
        pekerjaan: "",
        pesan: ""
    });
    const [reviews, setReviews] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Load combined reviews from JSON and localStorage
        const localReviews = JSON.parse(localStorage.getItem("user_reviews") || "[]");
        setReviews([...initialKritik, ...localReviews]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: Date.now(),
            ...formData
        };

        // Save to localStorage (Simulating persistent storage)
        const updatedLocal = JSON.parse(localStorage.getItem("user_reviews") || "[]");
        updatedLocal.push(newReview);
        localStorage.setItem("user_reviews", JSON.stringify(updatedLocal));

        // Update UI
        setReviews([...reviews, newReview]);
        setFormData({ nama: "", phone: "", pekerjaan: "", pesan: "" });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <Section 
            id="feedback" 
            bg="dark"
            subtitle="Kritik & Saran" 
            title="Bagikan Pengalaman Anda"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Form Input */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="lg:col-span-5 bg-professional/40 p-8 rounded-[40px] border border-white/10 glass-dark"
                >
                    <h3 className="text-2xl font-black mb-8 text-white italic">Formulir <span className="text-gold">Review</span></h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50 group-focus-within:text-gold transition-colors" />
                            <input 
                                required
                                type="text"
                                placeholder="Nama Lengkap"
                                value={formData.nama}
                                onChange={(e) => setFormData({...formData, nama: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold transition-all"
                            />
                        </div>

                        <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50 group-focus-within:text-gold transition-colors" />
                            <input 
                                required
                                type="tel"
                                placeholder="Nomor Handphone"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold transition-all"
                            />
                        </div>

                        <div className="relative group">
                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50 group-focus-within:text-gold transition-colors" />
                            <input 
                                required
                                type="text"
                                placeholder="Bidang Pekerjaan"
                                value={formData.pekerjaan}
                                onChange={(e) => setFormData({...formData, pekerjaan: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold transition-all"
                            />
                        </div>

                        <div className="relative group">
                            <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gold/50 group-focus-within:text-gold transition-colors" />
                            <textarea 
                                required
                                rows="4"
                                placeholder="Pesan, Kritik, atau Saran Anda..."
                                value={formData.pesan}
                                onChange={(e) => setFormData({...formData, pesan: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold transition-all resize-none"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-gold hover:bg-gold-dark text-professional font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-gold/20 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Send className="w-5 h-5" />
                            Simpan Review
                        </button>

                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center text-gold font-bold text-sm"
                                >
                                    Terima kasih! Review Anda telah disimpan.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>

                {/* Marquee Display */}
                <div className="lg:col-span-7 flex flex-col justify-center overflow-hidden">
                    <div className="relative">
                        {/* Shadow Gradients for focus */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                        {/* Unlimited Scrolling Container */}
                        <div className="flex gap-6 py-10 relative">
                            <motion.div 
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ 
                                    duration: 30, // Kecepatan gerak
                                    repeat: Infinity, 
                                    ease: "linear" 
                                }}
                                className="flex gap-6 flex-nowrap"
                            >
                                {/* Double set of reviews for seamless animation */}
                                {[...reviews, ...reviews].map((review, idx) => (
                                    <div 
                                        key={idx}
                                        className="w-72 flex-shrink-0 bg-white/5 border border-white/10 p-6 rounded-[32px] glass hover:bg-white/10 transition-colors group"
                                    >
                                        <div className="flex gap-1 mb-4 text-gold/60 group-hover:text-gold transition-colors">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                                        </div>
                                        <p className="text-white/80 text-sm italic mb-6 leading-relaxed line-clamp-4">
                                            "{review.pesan}"
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                                                {review.nama.charAt(0)}
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-white font-black text-sm truncate">{review.nama}</h4>
                                                <p className="text-gold/60 font-bold text-[9px] uppercase tracking-widest">{review.pekerjaan}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    <div className="mt-10 px-8">
                        <div className="flex items-center gap-4 text-white/40">
                            <div className="h-px flex-grow bg-white/10" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Total {reviews.length} Feedback & Saran</span>
                            <div className="h-px flex-grow bg-white/10" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Feedback;
