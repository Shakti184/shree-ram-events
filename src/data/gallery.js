// src/data/gallery.js

// 1. Import your local images
import bubbleEntry from '../assets/images/bubble-entry.jpeg';
import fogEntry from '../assets/images/fog-entry.jpeg';
import glassEntry from '../assets/images/glass-entry.jpeg';
import handPyro from '../assets/images/hand-pyro.jpeg';
import mirrorEntry from '../assets/images/mirror-entry.jpeg';
import pyroEffect from '../assets/images/pyro-effect.jpeg';
import stageEffect from '../assets/images/stage-effect.jpeg';
import cateringImg from '../assets/images/service-catering.png'; // From previous step
import decorImg from '../assets/images/service-decor.png';       // From previous step
import eventImg from '../assets/images/service-event.png';       // From previous step
import bubbleEntry1 from '../assets/images/bubble-entry1.jpeg';
import fogEntry1 from '../assets/images/fog-entry1.jpeg';
import glassEntry1 from '../assets/images/glass-entry1.jpeg';
import handPyro1 from '../assets/images/hand-pyro1.jpeg';
import mirrorEntry1 from '../assets/images/mirror-entry1.jpeg';
import pyroEffect1 from '../assets/images/pyro-effect1.jpeg';

export const galleryImages = [
  // --- ENTRIES (Your new images) ---
  {
    id: 1,
    src: fogEntry,
    category: 'Entries',
    title: 'Matka Fog Entry'
  },
  {
    id: 2,
    src: mirrorEntry,
    category: 'Entries',
    title: 'Infinity Mirror Walkway'
  },
  {
    id: 3,
    src: bubbleEntry,
    category: 'Entries',
    title: 'Dreamy Bubble Entrance'
  },
  {
    id: 4,
    src: glassEntry,
    category: 'Entries',
    title: 'Glass Floor Setup'
  },
  {
    id: 5,
    src: fogEntry1,
    category: 'Entries',
    title: 'Matka Fog Entry'
  },
  {
    id: 6,
    src: mirrorEntry1,
    category: 'Entries',
    title: 'Infinity Mirror Walkway'
  },
  {
    id: 7,
    src: bubbleEntry1,
    category: 'Entries',
    title: 'Dreamy Bubble Entrance'
  },
  {
    id: 8,
    src: glassEntry1,
    category: 'Entries',
    title: 'Glass Floor Setup'
  },
  // --- WEDDING / PYRO ---
  {
    id: 9,
    src: handPyro,
    category: 'Wedding',
    title: 'Bridal Hand Pyro'
  },
  {
    id: 10,
    src: handPyro1,
    category: 'Wedding',
    title: 'Bridal Hand Pyro'
  },
  {
    id: 11,
    src: eventImg,
    category: 'Wedding',
    title: 'Grand Wedding Setup'
  },

  // --- MUSIC / STAGE ---
  {
    id: 12,
    src: pyroEffect,
    category: 'Music',
    title: 'Stage Cold Pyro'
  },
   {
    id: 13,
    src: pyroEffect1,
    category: 'Music',
    title: 'Stage Cold Pyro'
  },
  {
    id: 14,
    src: stageEffect,
    category: 'Music',
    title: 'Special Stage FX'
  },

  // --- DECOR ---
  {
    id: 15,
    src: decorImg,
    category: 'Decor',
    title: 'Floral Arrangements'
  },
  // Adding a few web placeholders to fill the grid for other categories
  {
    id: 16,
    src: "https://wedmevibes.com/wp-content/uploads/2024/06/gallery2.jpeg",
    category: 'Decor',
    title: 'Mandap Design'
  },

  // --- CATERING ---
  {
    id: 17,
    src: cateringImg,
    category: 'Catering',
    title: 'Premium Buffet Setup'
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
    category: 'Catering',
    title: 'Live Food Counters'
  }
];