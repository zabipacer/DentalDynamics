import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Comprehensive Dental Checkup in Lahore",
    description:
      "Ensure your oral health with our thorough dental exam, including digital X-rays and oral cancer screening. Early detection means healthier smiles.",
    image: "/assets/images/dc.png",
    link: "/",
  },
  {
    title: "Scaling & Polishing for Healthy Gums",
    description:
      "Remove plaque and tartar buildup with our ultrasonic cleaning. Prevent gum disease and enjoy a fresh, bright smile that lasts.",
    image: "/assets/images/Scp.png",
    link: "/",
  },
  {
    title: "Professional Fluoride Treatment",
    description:
      "Strengthen enamel and prevent cavities with our in-office fluoride application. Ideal for children and adults seeking lasting protection.",
    image: "/assets/images/ft.png",
    link: "/",
  },
  {
    title: "LED-Accelerated Teeth Whitening",
    description:
      "Achieve up to 8 shades whiter in under an hour using safe, enamel-friendly whitening gel. Walk out with a confident, radiant smile.",
    image: "/assets/images/tw.png",
    link: "/",
  },
  {
    title: "Complete Smile Makeover",
    description:
      "Customize your dream smile with veneers, crowns, and whitening. Our expert team crafts personalized cosmetic plans for stunning transformations.",
    image: "/assets/images/sm.png",
    link: "/",
  },
  {
    title: "Porcelain Veneers in Lahore",
    description:
      "Cover chips, gaps, and stains with ultra-thin porcelain shells. Enjoy natural-looking results that last, boosting both function and confidence.",
    image: "/assets/images/v.png",
    link: "/",
  },
  {
    title: "Tooth-Colored Composite Fillings",
    description:
      "Restore decayed teeth seamlessly with composite resin. Our fillings match your natural enamel for a discreet, durable solution.",
    image: "/assets/images/fil.png",
    link: "/",
  },
  {
    title: "Same-Day CEREC Crowns & Bridges",
    description:
      "Get custom ceramic crowns or bridges in a single visit. Preserve your smile’s function and aesthetics without multiple appointments.",
    image: "/assets/images/dcb.png",
    link: "/",
  },
  {
    title: "Dental Implants in Lahore",
    description:
      "Replace missing teeth with titanium implants and lifelike crowns. Regain full chewing function and a natural appearance that lasts a lifetime.",
    image: "/assets/images/dental-implants.png",
    link: "/",
  },
  {
    title: "Braces & Clear Aligners",
    description:
      "Straighten teeth with traditional braces or discreet clear aligners. Our orthodontic solutions are tailored for comfort and fast results.",
    image: "/assets/images/braces.png",
    link: "/",
  },
  {
    title: "Pain-Free Root Canal Therapy",
    description:
      "Save your tooth with modern root canal techniques under local anesthesia. Our gentle approach makes the procedure virtually painless.",
    image: "/assets/images/root-canal.png",
    link: "/",
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "Safely remove impacted wisdom teeth using advanced surgical protocols. Recover quickly with minimal discomfort under expert care.",
    image: "/assets/images/wisdom.png",
    link: "/",
  },
  {
    title: "Pediatric Dentistry in Lahore",
    description:
      "Cultivate healthy habits early with gentle, kid-friendly care. From exams to fluoride, we make every visit fun and stress-free for children.",
    image: "/assets/images/pediatric.png",
    link: "/",
  },
  {
    title: "Gum Disease & Periodontal Treatment",
    description:
      "Combat gingivitis and periodontitis with scaling, root planing, and laser therapy. Protect your gums and preserve your natural teeth.",
    image: "/assets/images/gum.png",
    link: "/",
  },
  {
    title: "Emergency Dental Care 24/7",
    description:
      "Immediate relief for toothaches, fractures, and trauma. Our on-call team in Lahore delivers prompt, compassionate emergency treatment anytime.",
    image: "/assets/images/emergency.png",
    link: "/",
  },
  {
    title: "Maxillofacial Surgery",
    description:
      "Our specialized surgeons handle complex facial, jaw, and oral surgeries with precision. Experience expert care for trauma, TMJ, and reconstructive needs.",
    image: "/assets/images/max.png",
    link: "/",
  },
  {
    title: "TMJ & Jaw Pain Relief",
    description:
      "Alleviate chronic jaw pain and TMJ disorders with customized therapies. From occlusal guards to physiotherapy, find lasting comfort here.",
    image: "/assets/images/jaw.png",
    link: "/",
  },
  {
    title: "Zirconia Crown Restorations",
    description:
      "Choose strong, esthetic zirconia crowns for broken or damaged teeth. Enjoy a perfect blend of durability and beauty in every restoration.",
    image: "/assets/images/zirconia1.png",
    link: "/",
  },
];

const FeaturedServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setItemsPerPage(1);
      } else if (w < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(services.length - itemsPerPage, 0);
  const cardWidthPercent = 100 / itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      id="services"
      className="relative bg-white py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Our Dental Services in Lahore
        </h2>

        <button
          aria-label="Previous services"
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          aria-label="Next services"
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * cardWidthPercent}%` }}
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
          >
            {services.map(({ title, description, image, link }, idx) => (
              <div
                key={idx}
                className="px-4"
                style={{ minWidth: `${cardWidthPercent}%` }}
              >
                <article className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                  <a
                    href={link}
                    title={title}
                    className="block w-full h-44 overflow-hidden"
                    aria-label={title}
                  >
                    <motion.img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      loading="lazy"
                    />
                  </a>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      <a href={link} title={title}>
                        {title}
                      </a>
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">
                      {description}
                    </p>
                    <div className="mt-auto">
                      <a
                        href={link}
                        className="
                          inline-block
                          w-full
                          bg-gradient-to-r from-blue-600 to-blue-800
                          hover:from-blue-700 hover:to-blue-900
                          text-white
                          text-center
                          py-2
                          rounded-full
                          font-medium
                          shadow-md
                          transition-all duration-300 transform hover:-translate-y-1
                        "
                        aria-label={`Explore ${title}`}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}

            {currentIndex + itemsPerPage > services.length &&
              services
                .slice(0, itemsPerPage)
                .map(({ title, description, image, link }, idx) => (
                  <div
                    key={`dup-${idx}`}
                    className="px-4"
                    style={{ minWidth: `${cardWidthPercent}%` }}
                  >
                    <article className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                      <a
                        href={link}
                        title={title}
                        className="block w-full h-44 overflow-hidden"
                        aria-label={title}
                      >
                        <motion.img
                          src={image}
                          alt={title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          loading="lazy"
                        />
                      </a>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                          <a href={link} title={title}>
                            {title}
                          </a>
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">
                          {description}
                        </p>
                        <div className="mt-auto">
                          <a
                            href={link}
                            className="
                              inline-block
                              w-full
                              bg-gradient-to-r from-blue-600 to-blue-800
                              hover:from-blue-700 hover:to-blue-900
                              text-white
                              text-center
                              py-2
                              rounded-full
                              font-medium
                              shadow-md
                              transition-all duration-300 transform hover:-translate-y-1
                            "
                            aria-label={`Explore ${title}`}
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;

