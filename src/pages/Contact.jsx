import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Format the message for WhatsApp
    const whatsappMessage = `*New Event Inquiry* %0A%0A` +
      `*Name:* ${formData.name} %0A` +
      `*Phone:* ${formData.phone} %0A` +
      `*Date:* ${formData.date} %0A` +
      `*Message:* ${formData.message}`;

    // 2. Create the WhatsApp URL (Your number: 8052019256)
    const whatsappUrl = `https://wa.me/918052019256?text=${whatsappMessage}`;

    // 3. Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // 4. Show success message on screen
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', date: '', message: '' });
    }, 5000);
  };

  return (
    <div className="w-full pt-20 bg-brand-light min-h-screen">
      
      {/* --- PAGE HEADER --- */}
      <div className="relative bg-brand-dark text-white py-20 text-center overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-heading font-bold text-brand-primary">Contact Us</h1>
          <p className="text-gray-300 mt-2">Let's plan your dream event together.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT SIDE: Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold font-heading mb-8 text-brand-dark">Get In Touch</h2>
            
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-full text-brand-primary shadow-md group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg">Call Us</h3>
                  <a href="tel:+918052019256" className="text-gray-600 hover:text-brand-primary transition block">
                    +91 8052019256
                  </a>
                  <a href="tel:+919565401501" className="text-gray-600 hover:text-brand-primary transition block">
                    +91 9565401501
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-full text-brand-primary shadow-md group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg">Email Us</h3>
                  <a href="mailto:contact@shreeramevents.com" className="text-gray-600 hover:text-brand-primary transition">
                    contact@shreeramevents.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-full text-brand-primary shadow-md group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg">Visit Office</h3>
                  <p className="text-gray-600">Near Hanuman Mandir, Bhikhampur Road,<br/> Deoria, Uttar Pradesh.</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/918052019256?text=Hi, I want to enquire about an event." 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition shadow-lg hover:shadow-xl hover:-translate-y-1 mb-8"
            >
              <MessageCircle size={24} /> Chat on WhatsApp
            </a>

            {/* Google Map Embed */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner border-2 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.366479836338!2d83.777!3d26.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993c4a24080133b%3A0x628045d436152771!2sDeoria%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703760000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold font-heading mb-6 text-brand-dark">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for contacting us. We will get back to you shortly on {formData.phone}.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    placeholder="Ex: 80520 19256"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Event Date (Approx)</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Message / Requirements</label>
                  <textarea 
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your event (Wedding, Birthday, etc.)"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Send size={20} /> Send Inquiry
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;