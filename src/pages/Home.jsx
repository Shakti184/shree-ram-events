import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, Users, Music, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import FAQ from '../components/features/FAQ';
import { testimonials } from '../data/testimonials';
import WhatsAppBtn from '../components/ui/WhatsAppBtn';

const Home = () => {
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

      {/* --- SERVICES PREVIEW --- */}
      <div className="py-20 bg-brand-light"> 
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Royal Services" 
            subtitle="We provide end-to-end event management services so you can enjoy your special day without stress." 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Wedding Decoration", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", desc: "Theme-based stages, floral arrangements, and lighting that sets the perfect mood." },
              { title: "Premium Catering", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop", desc: "Delicious vegetarian and non-vegetarian menus tailored to your taste and tradition." },
              { title: "DJ & Entertainment", img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop", desc: "Live bands, DJs, and entry concepts like 'Rath' and vintage cars for the groom." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold font-heading mb-3 text-brand-dark">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="text-brand-primary font-bold hover:gap-2 transition-all flex items-center uppercase text-xs tracking-widest">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border-2 border-brand-primary text-brand-primary px-10 py-3 rounded-full font-bold hover:bg-brand-primary hover:text-white transition uppercase tracking-wide text-sm">
              View All Services
            </Link>
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