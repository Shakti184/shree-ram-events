import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect: Change background when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-brand-dark/20 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-heading font-bold flex flex-col leading-tight group">
          <span className={`transition-colors ${scrolled ? 'text-brand-primary' : 'text-brand-primary'}`}>
            Shree Ram
          </span>
          <span className={`text-xs tracking-widest uppercase font-body ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
            Events & Traders
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name}
                to={link.path}
                className={`font-body font-medium transition-colors hover:text-brand-primary relative ${
                  scrolled ? 'text-brand-dark' : 'text-white'
                } ${isActive ? 'text-brand-primary' : ''}`}
              >
                {link.name}
                {/* Active Dot Indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav" 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary" 
                  />
                )}
              </Link>
            );
          })}
          
          <a href="tel:+918052019256" className="bg-brand-primary text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition shadow-lg font-bold hover:-translate-y-0.5 transform">
            <PhoneCall size={18} />
            <span>Book Now</span>
          </a>
        </div>

        {/* MOBILE BURGER ICON */}
        <button 
          className={`md:hidden focus:outline-none ${scrolled ? 'text-brand-dark' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} className="text-brand-primary" /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`py-4 px-6 font-medium border-b border-gray-50 hover:bg-orange-50 hover:text-brand-primary transition ${
                    location.pathname === link.path ? 'text-brand-primary bg-orange-50/50' : 'text-brand-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+918052019256" className="py-4 px-6 text-brand-primary font-bold flex items-center gap-2 bg-orange-50">
                 <PhoneCall size={18} /> Call +91 80520 19256
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;