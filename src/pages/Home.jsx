import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Star, Calendar, Users, Music, Instagram, Facebook,
  Sparkles, Zap, Aperture, Crown, Heart, Camera // <--- Added missing icon imports here
} from 'lucide-react';
import { motion } from 'framer-motion';

import SectionHeading from '../components/ui/SectionHeading';
import FAQ from '../components/features/FAQ';
import { testimonials } from '../data/testimonials';
import WhatsAppBtn from '../components/ui/WhatsAppBtn';

// --- IMPORT ENTRY & EFFECT IMAGES ---
import bubbleEntry from '../assets/images/bubble-entry.jpeg';
import fogEntry from '../assets/images/fog-entry.jpeg';
import glassEntry from '../assets/images/glass-entry.jpeg';
import handPyro from '../assets/images/hand-pyro.jpeg';
import mirrorEntry from '../assets/images/mirror-entry.jpeg';
import pyroEffect from '../assets/images/pyro-effect.jpeg';
import stageEffect from '../assets/images/stage-effect.jpeg';

const Home = () => {
  // --- DATA: SPECIAL ENTRIES & EFFECTS ---
  const entryServices = [
    {
      id: "entry-1",
      title: "Matka Fog Entry",
      description: "Walk through clouds with our heavy fog matka entry effect.",
      image: fogEntry,
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      id: "entry-2",
      title: "Bridal Hand Pyro",
      description: "A stunning, safe cold pyro sparkling effect held by the bride/groom.",
      image: handPyro,
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: "entry-3",
      title: "Infinity Mirror Entry",
      description: "A luxury pathway with reflective mirror flooring for a royal walk.",
      image: mirrorEntry,
      icon: <Aperture className="w-5 h-5" />
    },
    {
      id: "entry-4",
      title: "Glass Floor Walkway",
      description: "Premium glass aisle setup with under-lighting for a glowing entrance.",
      image: glassEntry,
      icon: <Crown className="w-5 h-5" />
    },
    {
      id: "entry-5",
      title: "Stage Cold Pyro",
      description: "Grand stage shots with synchronized cold fire fountains.",
      image: pyroEffect,
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: "entry-6",
      title: "Dreamy Bubble Entry",
      description: "Thousands of bubbles creating a fairytale atmosphere.",
      image: bubbleEntry,
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: "entry-7",
      title: "Special Stage FX",
      description: "CO2 jets, papers blasts, and professional lighting effects.",
      image: stageEffect,
      icon: <Camera className="w-5 h-5" />
    },
    {
      id: "entry-8",
      title: "DJ & Sound Setup",
      description: "High-bass sound systems and intelligent lighting for the dance floor.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1470",
      icon: <Music className="w-5 h-5" />
    }
  ];

  return (
    <div className="w-full">
      {/* Floating WhatsApp Button (Fixed Position) */}
      <WhatsAppBtn /> 
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background Image */}
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight drop-shadow-lg"
          >
            Turning Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Dream Events</span> <br /> Into Royal Reality
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl mb-10 text-gray-200 font-light max-w-3xl mx-auto"
          >
            Premier Wedding Planners & Decorators in Deoria & Gorakhpur.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-5 justify-center items-center"
          >
            <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1">
              Plan My Event <ArrowRight size={20} />
            </Link>
            
            {/* Social Buttons in Hero */}
            <div className="flex gap-4">
               <a href="https://instagram.com/shreeram_events_deoria" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-pink-600 transition shadow-lg border border-white/20">
                 <Instagram size={24} />
               </a>
               <a href="https://facebook.com/shreeram_events_deoria" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-blue-600 transition shadow-lg border border-white/20">
                 <Facebook size={24} />
               </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- CORE VALUES SECTION (Gradient Bar) --- */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-10 shadow-xl relative z-20">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { label: 'Creative Ideas', icon: <Star className="mx-auto mb-2 w-8 h-8" /> },
            { label: 'Budget Friendly', icon: <Calendar className="mx-auto mb-2 w-8 h-8" /> },
            { label: 'On-Time Service', icon: <Users className="mx-auto mb-2 w-8 h-8" /> },
            { label: 'Premium Quality', icon: <Music className="mx-auto mb-2 w-8 h-8" /> },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 hover:bg-white/10 rounded-xl transition-all duration-300 cursor-default border border-white/10">
              {item.icon}
              <div className="text-lg font-bold font-heading tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PROCESS SECTION --- */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="How We Work" 
            subtitle="Your dream event in 4 simple steps." 
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-12">
             {/* Connecting Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10"></div>

            {[
              { step: '01', title: 'Consultation', desc: 'We meet to discuss your ideas, theme, and budget.' },
              { step: '02', title: 'Planning', desc: 'We create a custom roadmap and design plan for you.' },
              { step: '03', title: 'Execution', desc: 'Our team handles all vendors, decor, and logistics.' },
              { step: '04', title: 'Celebration', desc: 'You relax and enjoy your special day with guests.' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 text-center group">
                <div className="w-24 h-24 mx-auto bg-white text-brand-primary text-2xl font-bold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border-4 border-brand-light relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 2: SPECIAL ENTRIES & VISUALS (The New Images) --- */}
      <div className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
             title="Grand Entries & Visual Effects" 
             subtitle="Make your entry viral-worthy with our special effects collection." 
             centered={true} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {entryServices.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className="h-48 overflow-hidden relative">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h4 className="text-white font-bold text-lg flex items-center gap-2">
                        {item.icon} {item.title}
                      </h4>
                   </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- TESTIMONIALS --- */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Client Love" 
            subtitle="Don't just take our word for it. Here is what our families say." 
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((review) => (
              <div key={review.id} className="bg-brand-light p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative group">
                {/* Quote Icon */}
                <div className="absolute -top-5 left-8 bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-serif leading-none mt-2">"</span>
                </div>
                
                <p className="text-gray-700 italic mb-6 leading-relaxed pt-2">"{review.text}"</p>
                
                <div className="flex items-center gap-4 border-t border-orange-200 pt-4">
                  <div className="w-12 h-12 bg-white text-brand-primary border border-brand-primary rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">{review.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{review.location}</p>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <FAQ />

      {/* --- SOCIAL MEDIA SECTION --- */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Follow Our Journey</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Check out our latest event photos, reels, and behind-the-scenes moments on social media.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="https://www.instagram.com/shreeram_events_deoria" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Instagram className="group-hover:rotate-12 transition-transform" /> 
              Follow on Instagram
            </a>

            <a 
              href="https://www.facebook.com/shreeram_events_deoria" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#1877F2] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Facebook className="group-hover:rotate-12 transition-transform" /> 
              Like on Facebook
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;