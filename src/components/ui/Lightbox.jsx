import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={onClose} // Close when clicking background
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
        >
          <X size={32} />
        </button>

        {/* Image Container */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative max-w-5xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
        >
          <img 
            src={image.src} 
            alt={image.category} 
            className="w-full h-full object-contain max-h-[85vh]" 
          />
          
          {/* Caption */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 text-white">
            <h3 className="text-xl font-heading font-bold text-brand-primary">{image.category}</h3>
            <p className="text-sm text-gray-300">Shree Ram Events Portfolio</p>
          </div>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;