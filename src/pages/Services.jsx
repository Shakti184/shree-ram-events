import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, Utensils, Star, // Core Icons
  Sparkles, Zap, Aperture, Heart, Crown, Camera, Music, ArrowRight, CheckCircle 
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import WhatsAppBtn from '../components/ui/WhatsAppBtn';

// --- 1. IMPORT CORE SERVICE IMAGES ---
import eventImage from '../assets/images/service-event.png';
import cateringImage from '../assets/images/service-catering.png';
import decorImage from '../assets/images/service-decor.png';

// --- 2. IMPORT ENTRY & EFFECT IMAGES ---
import bubbleEntry from '../assets/images/bubble-entry.jpeg';
import fogEntry from '../assets/images/fog-entry.jpeg';
import glassEntry from '../assets/images/glass-entry.jpeg';
import handPyro from '../assets/images/hand-pyro.jpeg';
import mirrorEntry from '../assets/images/mirror-entry.jpeg';
import pyroEffect from '../assets/images/pyro-effect.jpeg';
import stageEffect from '../assets/images/stage-effect.jpeg';

const Services = () => {

  // --- DATA: MAIN SERVICES ---
  const mainServices = [
    {
      id: 1,
      title: "Wedding & Event Planning",
      icon: <Calendar className="w-6 h-6" />,
      description: "A to Z planning for your big day. We handle venues, vendors, and timelines.",
      image: eventImage,
    },
    {
      id: 2,
      title: "Premium Catering",
      icon: <Utensils className="w-6 h-6" />,
      description: "Exquisite menus with live counters, authentic flavors, and hygienic preparation.",
      image: cateringImage,
    },
    {
      id: 3,
      title: "Decor & Styling",
      icon: <Star className="w-6 h-6" />,
      description: "Theme-based floral arrangements, mandap designs, and magical lighting.",
      image: decorImage,
    }
  ];

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
    <div className="w-full pt-20">
      <WhatsAppBtn />

      {/* --- HERO HEADER --- */}
      <div className="relative bg-brand-dark text-white py-24 text-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4 text-brand-primary"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            From Royal Weddings to Corporate Events, we make every moment unforgettable.
          </motion.p>
        </div>
      </div>

      {/* --- SECTION 1: CORE SERVICES --- */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Core Planning Services" subtitle="Everything you need for a perfect event foundation." centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {mainServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 relative">
                   <div className="absolute -top-8 right-6 bg-brand-primary text-white p-4 rounded-full shadow-lg">
                      {service.icon}
                   </div>
                   <h3 className="text-2xl font-heading font-bold mb-3 text-brand-dark">{service.title}</h3>
                   <p className="text-gray-600 mb-6">{service.description}</p>
                   
                   {/* BUTTON 1: CORE SERVICES */}
                   <Link to="/contact" className="text-brand-primary font-bold hover:underline flex items-center">
                     Book Now <ArrowRight size={16} className="ml-2" />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 2: GRAND ENTRIES & VISUALS --- */}
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
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h4 className="text-white font-bold text-lg flex items-center gap-2">
                        {item.icon} {item.title}
                      </h4>
                   </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
                  
                  {/* BUTTON 2: ENTRY SERVICES (NEW ADDITION) */}
                  <Link to="/contact" className="text-brand-primary text-xs font-bold uppercase tracking-widest hover:text-orange-600 inline-flex items-center self-start border-b border-transparent hover:border-brand-primary pb-0.5 transition-all">
                    Book Now <ArrowRight size={12} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- VALUE PROPOSITION --- */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-heading font-bold text-brand-primary mb-12">Why Choose Shree Ram Events?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="flex gap-4">
               <CheckCircle className="text-brand-primary shrink-0" size={28} />
               <div>
                 <h4 className="text-xl font-bold">Complete Transparency</h4>
                 <p className="text-gray-400 text-sm mt-1">No hidden costs. We work strictly within your approved budget.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <CheckCircle className="text-brand-primary shrink-0" size={28} />
               <div>
                 <h4 className="text-xl font-bold">Trend-Setting Concepts</h4>
                 <p className="text-gray-400 text-sm mt-1">Latest Instagram-worthy decor trends and entry concepts.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <CheckCircle className="text-brand-primary shrink-0" size={28} />
               <div>
                 <h4 className="text-xl font-bold">Personal Attention</h4>
                 <p className="text-gray-400 text-sm mt-1">We take limited bookings to ensure your event gets 100% focus.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <CheckCircle className="text-brand-primary shrink-0" size={28} />
               <div>
                 <h4 className="text-xl font-bold">Local Expertise</h4>
                 <p className="text-gray-400 text-sm mt-1">Best vendor network in Deoria & Gorakhpur for best rates.</p>
               </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/contact" className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition hover:-translate-y-1">
              Customize Your Package
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;