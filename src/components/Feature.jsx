import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const services = [
  {
    title: 'Comprehensive Dental Checkup in Lahore',
    description:
      'Ensure your oral health with our thorough dental exam, including digital X-rays and oral cancer screening. Early detection means healthier smiles.',
    image: '/assets/images/dc.png',
    link: '/',
  },
  {
    title: 'Scaling & Polishing for Healthy Gums',
    description:
      'Remove plaque and tartar buildup with our ultrasonic cleaning. Prevent gum disease and enjoy a fresh, bright smile that lasts.',
    image: '/assets/images/Scp.png',
    link: '/',
  },
  {
    title: 'Professional Fluoride Treatment',
    description:
      'Strengthen enamel and prevent cavities with our in-office fluoride application. Ideal for children and adults seeking lasting protection.',
    image: '/assets/images/ft.png',
    link: '/',
  },
  {
    title: 'LED-Accelerated Teeth Whitening',
    description:
      'Achieve up to 8 shades whiter in under an hour using safe, enamel-friendly whitening gel. Walk out with a confident, radiant smile.',
    image: '/assets/images/tw.png',
    link: '/',
  },
  {
    title: 'Complete Smile Makeover',
    description:
      'Customize your dream smile with veneers, crowns, and whitening. Our expert team crafts personalized cosmetic plans for stunning transformations.',
    image: '/assets/images/sm.png',
    link: '/',
  },
  {
    title: 'Porcelain Veneers in Lahore',
    description:
      'Cover chips, gaps, and stains with ultra-thin porcelain shells. Enjoy natural-looking results that last, boosting both function and confidence.',
    image: '/assets/images/v.png',
    link: '/',
  },
  {
    title: 'Tooth-Colored Composite Fillings',
    description:
      'Restore decayed teeth seamlessly with composite resin. Our fillings match your natural enamel for a discreet, durable solution.',
    image: '/assets/images/fil.png',
    link: '/',
  },
  {
    title: 'Same-Day CEREC Crowns & Bridges',
    description:
      'Get custom ceramic crowns or bridges in a single visit. Preserve your smile’s function and aesthetics without multiple appointments.',
    image: '/assets/images/dcb.png',
    link: '/',
  },
  {
    title: 'Dental Implants in Lahore',
    description:
      'Replace missing teeth with titanium implants and lifelike crowns. Regain full chewing function and a natural appearance that lasts a lifetime.',
    image: '/assets/images/dental-implants.png',
    link: '/',
  },
  {
    title: 'Braces & Clear Aligners',
    description:
      'Straighten teeth with traditional braces or discreet clear aligners. Our orthodontic solutions are tailored for comfort and fast results.',
    image: '/assets/images/braces.png',
    link: '/',
  },
  {
    title: 'Pain-Free Root Canal Therapy',
    description:
      'Save your tooth with modern root canal techniques under local anesthesia. Our gentle approach makes the procedure virtually painless.',
    image: '/assets/images/root-canal.png',
    link: '/',
  },
  {
    title: 'Wisdom Tooth Extraction',
    description:
      'Safely remove impacted wisdom teeth using advanced surgical protocols. Recover quickly with minimal discomfort under expert care.',
    image: '/assets/images/wisdom.png',
    link: '/',
  },
  {
    title: 'Pediatric Dentistry in Lahore',
    description:
      'Cultivate healthy habits early with gentle, kid-friendly care. From exams to fluoride, we make every visit fun and stress-free for children.',
    image: '/assets/images/pediatric.png',
    link: '/',
  },
  {
    title: 'Gum Disease & Periodontal Treatment',
    description:
      'Combat gingivitis and periodontitis with scaling, root planing, and laser therapy. Protect your gums and preserve your natural teeth.',
    image: '/assets/images/gum.png',
    link: '/',
  },
  {
    title: 'Emergency Dental Care 24/7',
    description:
      'Immediate relief for toothaches, fractures, and trauma. Our on-call team in Lahore delivers prompt, compassionate emergency treatment anytime.',
    image: '/assets/images/emergency.png',
    link: '/',
  },
  {
    title: 'Maxillofacial Surgery',
    description:
      'Our specialized surgeons handle complex facial, jaw, and oral surgeries with precision. Experience expert care for trauma, TMJ, and reconstructive needs.',
    image: '/assets/images/max.png',
    link: '/',
  },
  {
    title: 'TMJ & Jaw Pain Relief',
    description:
      'Alleviate chronic jaw pain and TMJ disorders with customized therapies. From occlusal guards to physiotherapy, find lasting comfort here.',
    image: '/assets/images/jaw.png',
    link: '/',
  },
  {
    title: 'Zirconia Crown Restorations',
    description:
      'Choose strong, esthetic zirconia crowns for broken or damaged teeth. Enjoy a perfect blend of durability and beauty in every restoration.',
    image: '/assets/images/zirconia1.png',
    link: '/',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const FeaturedServices = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          id="services-heading"
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Our Dental Services in Lahore
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map(({ title, description, image, link }, idx) => (
            <motion.article
              key={idx}
              variants={cardVariants}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              itemScope
              itemType="https://schema.org/Service"
            >
              <a
                href={link}
                className="block focus:outline-none focus:ring-4 focus:ring-blue-200"
                itemProp="serviceType"
                aria-label={title}
              >
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3
                    className="text-2xl font-semibold text-gray-900 mb-2"
                    itemProp="name"
                  >
                    {title}
                  </h3>
                  <p
                    className="text-gray-700 text-sm md:text-base leading-relaxed mb-4"
                    itemProp="description"
                  >
                    {description}
                  </p>
                  <span className="inline-flex items-center text-gray-900 font-medium hover:underline">
                    Learn More <FaChevronRight className="ml-2" />
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;
