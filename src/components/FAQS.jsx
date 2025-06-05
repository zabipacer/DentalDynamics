import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What is the cost of dental implants in Lahore?',
    answer: (
      <>
        At Dental Dynamics Dental Clinic in Lahore, the cost of a single dental implant typically ranges from PKR 45,000 to PKR 85,000, depending on the implant system and any bone grafting required. For full details and package pricing, please visit our{' '}
        <Link
          to="/dental-implants-lahore"
          className="text-blue-700 underline hover:text-blue-900 transition-colors duration-200"
        >
          Dental Implants in Lahore
        </Link>{' '}
        page.
      </>
    ),
  },
  {
    question: 'Does Dental Dynamics offer payment plans for dental treatments in Lahore?',
    answer: (
      <>
        Yes. At Dental Dynamics, we understand affordability is crucial. We provide flexible payment plans for implants, braces, and cosmetic procedures to help residents of Lahore receive quality dental care without financial strain.
      </>
    ),
  },
  {
    question: 'How often should I visit Dental Dynamics for a dental check-up in Lahore?',
    answer: (
      <>
        We recommend a routine dental check-up and cleaning every six months at Dental Dynamics Dental Clinic in Model Town, Lahore. Regular visits enable early detection of cavities, gum disease, and other oral health issues before they become serious.
      </>
    ),
  },
  {
    question: 'Are teeth whitening procedures safe at Dental Dynamics in Lahore?',
    answer: (
      <>
        Absolutely. Our professional teeth whitening services at Dental Dynamics use approved, enamel-safe bleaching agents under dentist supervision. We offer both in-office LED-accelerated whitening and take-home kits designed for effective, comfortable results.
      </>
    ),
  },
  {
    question: 'What options are available for replacing missing teeth in Lahore?',
    answer: (
      <>
        At Dental Dynamics, we offer several solutions for missing teeth:
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>
            Single or multiple{' '}
            <Link to="/dental-implants-lahore" className="text-blue-700 underline hover:text-blue-900">
              dental implants
            </Link>
          </li>
          <li>
            Custom-crafted{' '}
            <Link to="/dental-bridges-lahore" className="text-blue-700 underline hover:text-blue-900">
              bridges
            </Link>
          </li>
          <li>
            Full or partial{' '}
            <Link to="/dentures-lahore" className="text-blue-700 underline hover:text-blue-900">
              dentures
            </Link>
          </li>
        </ul>
        Our specialists will assess your oral health and recommend the most suitable option for you in Lahore.
      </>
    ),
  },
  {
    question: 'Does Dental Dynamics provide emergency dental services in Lahore?',
    answer: (
      <>
        Yes. Dental Dynamics offers 24/7 emergency dental care in Lahore for severe toothaches, trauma, and other urgent issues. Please call us immediately at{' '}
        <a href="tel:+923008444631" className="text-blue-700 underline hover:text-blue-900">
          +92 300 8444631
        </a>{' '}
        if you require emergency treatment.
      </>
    ),
  },
  {
    question: 'What is the process for getting braces at Dental Dynamics in Lahore?',
    answer: (
      <>
        The process begins with a comprehensive orthodontic consultation at our Model Town, Lahore clinic. Our orthodontist will evaluate your teeth alignment, take digital scans, and develop a personalized braces plan. We offer both metal braces and clear aligners to suit your lifestyle. Regular follow-up visits ensure your treatment stays on track.
      </>
    ),
  },
  {
    question: 'Is root canal treatment painful at Dental Dynamics in Lahore?',
    answer: (
      <>
        Modern root canal therapy at Dental Dynamics is performed under local anesthesia, making the procedure virtually painless. Our experienced endodontists use the latest rotary instruments and gentle techniques to ensure a comfortable experience for every patient in Lahore.
      </>
    ),
  },
  {
    question: 'Does Dental Dynamics offer pediatric dental services in Lahore?',
    answer: (
      <>
        Yes. We provide specialized pediatric dentistry at Dental Dynamics in Model Town, Lahore. Our kid-friendly environment and gentle approach help children feel at ease during check-ups, cleanings, fluoride treatments, and sealants.
      </>
    ),
  },
  {
    question: 'What infection control measures does Dental Dynamics follow in Lahore?',
    answer: (
      <>
        At Dental Dynamics, we strictly adhere to PPE protocols, autoclave sterilization, and disposable instrument usage where applicable. Our staff undergoes regular infection control training to maintain the highest standards of hygiene and safety for every patient in Lahore.
      </>
    ),
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
      className="bg-white py-20 px-6 md:px-8 lg:px-16"
      aria-label="Dental Dynamics FAQ Section for Lahore"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions about Dental Dynamics in Lahore
        </h2>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-gray-50 shadow-sm overflow-hidden transition-all duration-300"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 font-semibold text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <span itemProp="name">{faq.question}</span>
                <span className="text-2xl transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`px-6 text-gray-700 text-base transition-all duration-300 ${
                  openIndex === index ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
