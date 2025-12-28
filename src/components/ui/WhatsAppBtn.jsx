import { MessageCircle } from 'lucide-react';

const WhatsAppBtn = () => {
  return (
    <a 
      href="https://wa.me/918052019256?text=Hi, I am interested in booking an event."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </a>
  );
};

export default WhatsAppBtn;