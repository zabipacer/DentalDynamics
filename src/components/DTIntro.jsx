import React from 'react';
import { motion } from 'framer-motion';

const DoctorTeethIntro = () => {
  const paragraphs = [
    "Dental Dynamics is a patient-centered dental clinic in Lahore dedicated to your comfort and care. When you visit us, you’ll receive complete attention from our experienced team, including general dentists, hygienists, and friendly staff.",
    "We take pride in delivering virtually pain-free treatments with a personal touch. If dental visits make you anxious, rest assured — we prioritize your peace of mind with calm surroundings, comfortable seating, and clear communication at every step.",
    "Our clinic is equipped with modern dental technology like digital X-rays and advanced surgical tools to make your visits fast, safe, and effective — so you spend less time in the chair, and more time smiling.",
  ];

  return (
    <section
      className="w-full py-16 px-4 text-white text-center"
      style={{
        background: `
          repeating-linear-gradient(
            45deg,
            #2f2f2f,
            #2f2f2f 2px,
            #3a3a3a 2px,
            #3a3a3a 4px
          )
        `,
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)',
      }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Welcome to Dental Dynamics Dental Clinic
        </motion.h2>

        {paragraphs.map((text, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.p
              key={idx}
              className="text-lg leading-relaxed"
              initial={{
                opacity: 0,
                x: isEven ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * (idx + 1),
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.8 }}
            >
              {text}
            </motion.p>
          );
        })}

        <motion.p
          className="text-lg leading-relaxed font-semibold"
          initial={{ opacity: 0, x: 0, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Dental Dynamics is now accepting new patients! We’re open on evenings and weekends to fit your busy schedule.
          <br />
          <a href="https://wa.me/923008444631" className="underline hover:text-yellow-300">
            Contact us today to book your first appointment.
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default DoctorTeethIntro;
