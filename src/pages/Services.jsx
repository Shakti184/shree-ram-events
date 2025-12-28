import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Car, Video, UserCheck, Sparkles, Star, Shield, Heart } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { servicesData } from '../data/services';

// Added icons to this data for better UI
const specialServices = [
  { 
    icon: <Car size={32} className="text-brand-primary" />,
    category: "Grand Entries", 
    items: ["Vintage Car Entry", "Rath (Chariot) Service", "Matka Fog Entry", "Balloon Entry", "Cold Pyro Entry"] 
  },
  { 
    icon: <Video size={32} className="text-brand-primary" />,
    category: "Tech & Visuals", 
    items: ["Drone Videography", "Cinematic Pre-Wedding Shoot", "LED Walls", "Live Youtube Streaming"] 
  },
  { 
    icon: <UserCheck size={32} className="text-brand-primary" />,
    category: "Hospitality", 
    items: ["VIP Waiters/Waitresses", "Welcome Hostesses", "Security Bouncers", "Valet Parking"] 
  },
  { 
    icon: <Sparkles size={32} className="text-brand-primary" />,
    category: "Beauty & Grooming", 
    items: ["Bridal Makeup", "Party Makeup", "Mehndi Artists", "Groom Styling"] 
  }
];

const Services = () => {
  return (
    <div className="w-full pt-20">
      
      {/* --- PAGE HEADER WITH BACKGROUND --- */}
      <div className="relative bg-brand-dark text-white py-24 text-center overflow-hidden">
        {/* Background Image Overlay */}
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
            Dedicated to perfection. We blend tradition with modern trends to create unmatched experiences.
          </motion.p>
        </div>
      </div>

      {/* --- MAIN SERVICES GRID --- */}
      <div className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image Area */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full text-brand-primary shadow-lg z-20 scale-90 group-hover:scale-100 transition-transform">
                    {service.icon}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-brand-dark group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm h-16 overflow-hidden">
                    {service.description}
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-brand-primary font-bold hover:gap-2 transition-all uppercase text-xs tracking-widest border-b-2 border-transparent hover:border-brand-primary pb-1"
                  >
                    Request Pricing <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- VALUE PROPOSITION (Dark Mode for Contrast) --- */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">Why Choose Shree Ram Events?</h2>
            <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We treat every event like our own family function.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            
            <div className="flex gap-5">
              <div className="bg-gray-800 p-4 h-fit rounded-full text-brand-primary shrink-0">
                <Shield size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 font-heading text-white">Complete Transparency</h4>
                <p className="text-gray-400 leading-relaxed">No hidden costs or last-minute surprises. We provide clear quotations and work strictly within your approved budget.</p>
              </div>
            </div>
            
            <div className="flex gap-5">
              <div className="bg-gray-800 p-4 h-fit rounded-full text-brand-primary shrink-0">
                <Star size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 font-heading text-white">Fresh & Modern Concepts</h4>
                <p className="text-gray-400 leading-relaxed">As a new team, we are updated with the latest Instagram/Pinterest trends to make your wedding viral-worthy.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-gray-800 p-4 h-fit rounded-full text-brand-primary shrink-0">
                <Heart size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 font-heading text-white">Dedicated Attention</h4>
                <p className="text-gray-400 leading-relaxed">We take limited bookings per month to ensure your event gets our 100% focus and personal presence.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-gray-800 p-4 h-fit rounded-full text-brand-primary shrink-0">
                <CheckCircle size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 font-heading text-white">Local Expertise</h4>
                <p className="text-gray-400 leading-relaxed">Strong network with the best vendors in Deoria & Gorakhpur to get you the best rates without compromising quality.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- SPECIAL ADD-ONS SECTION --- */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Beyond The Basics" 
            subtitle="Make your event unique with our premium add-on services." 
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {specialServices.map((service, index) => (
              <div key={index} className="bg-brand-light border border-orange-100 p-8 rounded-2xl hover:shadow-xl transition-shadow text-center group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-primary mb-4">
                  {service.category}
                </h3>
                <ul className="space-y-3 text-left pl-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition hover:-translate-y-1">
              Customize Your Package Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;