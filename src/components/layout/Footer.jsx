import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand Identity */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-heading font-bold text-brand-primary mb-4">
                Shree Ram <span className="text-white text-lg block font-body tracking-wider">Events & Traders</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Making your special moments unforgettable. We are the premier event planners in Deoria & Gorakhpur, specializing in royal weddings, theme decor, and premium catering.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold text-brand-primary mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/" className="hover:text-brand-primary hover:translate-x-2 transition-all inline-block">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-primary hover:translate-x-2 transition-all inline-block">Our Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-primary hover:translate-x-2 transition-all inline-block">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-primary hover:translate-x-2 transition-all inline-block">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold text-brand-primary mb-6">Get In Touch</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <p className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-primary shrink-0 mt-1" />
                <span>Near Hanuman Mandir, Bhikhampur Road,<br/> Deoria, Uttar Pradesh.</span>
              </p>
              
              <a href="tel:+918052019256" className="flex items-center gap-3 hover:text-white transition">
                <Phone size={20} className="text-brand-primary shrink-0" />
                <span>+91 80520 19256</span>
              </a>

              <a href="mailto:contact@shreeramevents.com" className="flex items-center gap-3 hover:text-white transition">
                <Mail size={20} className="text-brand-primary shrink-0" />
                <span>contact@shreeramevents.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a 
                href="https://www.instagram.com/shreeram_events_deoria" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 hover:-translate-y-1 transition-all shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/shreeram_events_deoria" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/shreeram_events_deoria" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 hover:-translate-y-1 transition-all shadow-lg"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Shree Ram Events & Traders. All rights reserved.</p>
          <p className="text-xs">Designed with ❤️ for Celebrations</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;