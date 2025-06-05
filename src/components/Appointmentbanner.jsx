import React from 'react';
import { motion } from 'framer-motion';

const AppointmentBanner = () => {
  return (
    <section
      className="w-full py-16 px-4 text-center bg-white text-gray-900"
    >
      <motion.h2
        className="sm:text-4xl text-3xl font-semibold mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.8 }}
      >
        Dental Dynamics is accepting new patients!
      </motion.h2>

      <motion.p
        className="text-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.8 }}
      >
        Schedule your appointment today:&nbsp;
        <a
          href="tel:923008444631"
          className="underline hover:text-green-600 font-medium"
        >
          +92 300 8444631
        </a>
      </motion.p>
    </section>
  );
};

export default AppointmentBanner;
