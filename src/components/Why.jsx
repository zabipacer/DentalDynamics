import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseDentalDynamics = () => {
  const reasons = [
    {
      title: 'Trusted Dental Clinic in Lahore',
      text: "Dental Dynamics has earned its reputation as a top-rated dental clinic in Lahore. Our clinic is fully licensed, and we adhere to strict sterilization protocols. Patients consistently praise our transparent pricing and ethical treatment plans, making us a trusted choice for families.",
    },
    {
      title: 'Advanced Technology & Digital X-rays',
      text: "We invest in the latest dental technology—digital radiography, laser dentistry, and intraoral cameras—to provide precise diagnoses with minimal radiation exposure. By using advanced equipment, we deliver faster treatments and more accurate results compared to conventional clinics.",
    },
    {
      title: 'Pain-Free & Comfort-First Approach',
      text: "Our team prioritizes patient comfort from the moment you walk in. We utilize topical numbing gels, gentle injection techniques, and sedation options when needed. Every treatment—whether a routine cleaning or a complex root canal—is designed to be virtually pain-free.",
    },
    {
      title: 'Experienced & Caring Team',
      text: "Our dentists, hygienists, and support staff combine decades of experience with compassionate bedside manner. Each provider stays up to date on continuing education courses in cosmetic, restorative, and pediatric dentistry to ensure you receive world-class care.",
    },
    {
      title: 'Comprehensive Services Under One Roof',
      text: "From preventive checkups and cleanings to orthodontics, implants, and cosmetic smile makeovers, Dental Dynamics offers a full spectrum of dental services. You never need to visit multiple offices—our multi-specialty team handles every aspect of oral health.",
    },
    {
      title: 'Convenient Location & Flexible Hours',
      text: "Located in Model Town, Lahore, we’re just minutes away from major neighborhoods. We offer evening and weekend appointments—perfect for busy professionals and families. Easy parking and a comfortable waiting area make every visit hassle-free.",
    },
  ];

  return (
    <section
      className="w-full py-20 px-4 bg-white"
      aria-label="Why Lahore Trusts Dental Dynamics"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Why Lahore Trusts Dental Dynamics
        </motion.h2>

        <div className="space-y-10">
          {reasons.map((reason, idx) => {
            const fromLeft = idx % 2 === 0;
            return (
              <motion.article
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-left"
                initial={{
                  opacity: 0,
                  x: fromLeft ? -100 : 100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 * idx,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, amount: 0.5 }}
                itemScope
                itemType="https://schema.org/MedicalBusiness"
              >
                <h3
                  className="text-2xl font-semibold text-gray-800 mb-2"
                  itemProp="name"
                >
                  {reason.title}
                </h3>
                <p
                  className="text-gray-600 text-base md:text-lg leading-relaxed"
                  itemProp="description"
                >
                  {reason.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDentalDynamics;
