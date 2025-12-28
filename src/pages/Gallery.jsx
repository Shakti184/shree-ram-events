import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Lightbox from '../components/ui/Lightbox'; // Import the new component
import { galleryImages } from '../data/gallery';

const categories = ['All', 'Wedding', 'Haldi', 'Decor', 'Catering', 'Music'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null); // State for Lightbox

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="w-full pt-20 min-h-screen bg-brand-light">
      
      {/* --- LIGHTBOX OVERLAY --- */}
      {selectedImg && (
        <Lightbox 
          image={selectedImg} 
          onClose={() => setSelectedImg(null)} 
        />
      )}

      {/* --- HEADER --- */}
      <div className="bg-brand-dark text-white py-16 text-center relative overflow-hidden">
        {/* Background Pattern (Optional CSS trick) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FF9933 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary relative z-10">Our Portfolio</h1>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto relative z-10 text-lg">
          Witness the magic we create. From grand entrances to subtle details.
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        
        {/* --- FILTER TABS --- */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm md:text-base transition-all duration-300 transform ${
                filter === cat 
                  ? 'bg-brand-primary text-white shadow-lg scale-105 ring-2 ring-offset-2 ring-brand-primary' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:border-orange-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- MASONRY-STYLE GRID --- */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                onClick={() => setSelectedImg(img)} // OPEN LIGHTBOX
                className="group relative h-72 rounded-2xl overflow-hidden shadow-md cursor-zoom-in border border-gray-100 bg-white"
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-brand-primary font-bold text-xs uppercase tracking-wider mb-1">
                    {img.category}
                  </span>
                  <span className="text-white font-heading text-lg font-bold">
                    View Full Size
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">More photos coming soon to this category!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;