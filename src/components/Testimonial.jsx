import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User2, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rubina Shoaib",
    text: "Care and treatment has always been top- notch. The products used are always the best and techniques are always the latest and advanced. Procedures and options are explained in detail in a friendly comfortable environment. I have been very satisfied on every occasion.",
  },
  {
    name: "Umar Khan",
    text: "Dr Ibad is a thorough professional and a trusted doctor.",
  },
  {
    name: "ukasha wajih",
    text: "I know Dr Ibad since the past 13-14 years . He is an amazingly professional person . He knows his work way too well and has great expertise in his field . He is always available , what more can u ask for from a dental doc as all my tooth aches and problems come on Sundays or public holidays 🤣 . He takes care of his patients really well . He is not a commercial dentist who makes u pay for the pain and trauma you are going thru other than the procedures he does . ankhain band ker k bharosa ker leyn .",
  },
  {
    name: "Muthammir Khawaja",
    text: "One of the best and kind dentist in Lahore.Very reasonable with pricing and experienced",
  },
  {
    name: "Tehreem Talat",
    text: "Really satisfied by the work done by Dr Ibad. He is professional dentist and using latest technology ,along with hygiene and friendly environment. Keep it .",
  },
  {
    name: "Sikandar Iqbal",
    text: "Had a number of procedures for myself and family from Dr Ibad, a thorough professional and knowledgeable person. I have recommended him to several others in my circle and all were very happy with his services!",
  },
  {
    name: "Mak Mustang",
    text: "Had a personal experience of the dental treatment.The team is professional and equipped properly alongwith highest standards of hygiene protocols.would recommend highly and vouch for dental dynamics.stay blessed",
  },
  {
    name: "Shahid Rasool",
    text: "Extraordinary satisfaction! Very friendly and experienced doctor. Highly recommended.",
  },
  {
    name: "Farooq Janjua",
    text: "Dr ibad is really professional and loyal dentist who is committed to serve humanity as well as his clients/patients.",
  },
  {
    name: "Hannia Masood",
    text: "Excellent services, hygenic ambience and courteous staff. I walked out as a satisfied customer. They have gotten a client for long.!",
  },
  {
    name: "Muhammad Azam Qureshi",
    text: "It is a clean n hygienic place with the best Doctor who takes his time. My experience was wonderful.",
  },
  {
    name: "Minna Masood",
    text: "Had a personal experience of the dental treatment.The team is professional and equipped properly alongwith highest standards of hygiene protocols.would recommend highly and vouch for dental dynamics.stay blessed",
  },
];

const slideVariants = {
  enterLeft: { opacity: 0, x: -120 },
  enterRight: { opacity: 0, x: 120 },
  center: { opacity: 1, x: 0 },
  exitLeft: { opacity: 0, x: -120 },
  exitRight: { opacity: 0, x: 120 },
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" aria-label="Patient Testimonials" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">What Our Patients Say</h2>

        {/* === Carousel Slide Area === */}
        <div className="relative h-96">
          <AnimatePresence initial={false}>
            {testimonials.map((t, i) => {
              if (i !== index) return null;

              const fromLeft = i % 2 === 0;
              const variants = {
                initial: fromLeft ? slideVariants.enterLeft : slideVariants.enterRight,
                animate: slideVariants.center,
                exit: fromLeft ? slideVariants.exitRight : slideVariants.exitLeft,
              };

              return (
                <motion.figure
                  key={i}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  role="group"
                  aria-label={`Testimonial from ${t.name}`}
                >
                  <blockquote className="bg-gray-50 w-full max-w-2xl rounded-3xl shadow-md p-8 text-left border-2 border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
                        <User2 className="w-8 h-8 text-gray-500" />
                      </div>
                      <figcaption className="ml-4">
                        <span className="text-xl font-semibold text-gray-900">{t.name}</span>
                      </figcaption>
                    </div>
                    <div className="flex justify-start mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-lg leading-relaxed">“{t.text}”</p>
                  </blockquote>
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </div>

        {/* === Pagination Dots === */}
        <div className="mt-6 flex justify-center gap-2" role="tablist">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-pressed={i === index}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                i === index ? "bg-gray-700 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* === Video Testimonial Section === */}
        <motion.div
          className="mt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Real Results: Smile Makeover in Lahore</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Watch how we transformed a patient’s smile with expert cosmetic dentistry. Discover why people trust our clinic for life-changing results.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-lg aspect-video border border-gray-200 mb-8">
            <video className="w-full h-full" controls poster="/poster (2).png" aria-label="Smile makeover video testimonial">
              <source src="test.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <motion.div
            className="bg-white p-6 rounded-2xl border border-gray-200 text-left shadow-sm max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <strong className="block mb-2 text-gray-900">Transcript:</strong>
            <p className="text-gray-700 leading-relaxed">
           “I searched everywhere for a <strong>cosmetic dentist in Lahore</strong>, and when I found Dr. Ibad at Dental Dynamics, everything changed. From the initial consultation to the final smile reveal, every step was smooth, professional, and surprisingly comfortable. If you're looking for the <strong>best smile makeover in Lahore</strong>, this is where you go.
            </p>
          </motion.div>

          <motion.a
            href="https://wa.me/+923008444631"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-gray-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Book Your Consultation Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
