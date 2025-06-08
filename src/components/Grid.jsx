import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';

const galleryImages = [
  { src: '/dental1.jpg', alt: 'Dental Dynamics clinic reception area' },
  { src: '/dental2.jpg', alt: 'Doctor Ibad performing dental checkup' },
  { src: '/dental3.jpg', alt: 'Modern dental equipment and tools' },
  { src: '/dental4.jpg', alt: 'Patient receiving teeth cleaning treatment' },
  { src: '/dental5.jpg', alt: 'Cosmetic dentistry before and after setup' },
  { src: '/dental6.jpg', alt: 'Dental Dynamics team collaborating' },
  { src: '/dental7.jpg', alt: 'Comfortable patient lounge area' },
  { src: '/dental8.jpg', alt: 'High-tech intraoral scanner in use' },
  { src: '/dental9.jpg', alt: 'Smiling patient showing dental results' },
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

export default function ImageGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Dental Dynamics Gallery
        </h2>
        {/* Grid with staggered entrance animations */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {galleryImages.map(({ src, alt }, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected({ src, alt })}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-center h-full">
                  <ZoomIn className="w-10 h-10 text-white" aria-hidden="true" />
                  <span className="sr-only">Zoom image</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="max-w-full max-h-[80vh] rounded-lg"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                  onClick={() => setSelected(null)}
                >
                  <X className="w-6 h-6" aria-label="Close image" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
