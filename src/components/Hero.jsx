import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { useIsMobile } from "./IsMobile";

const slides = [
  {
    title: "Pain-Free Wisdom Tooth Removal in Lahore",
    text: "Expert extraction with laser precision. Walk out smiling same-day with minimal recovery time.",
    cta: "Book Free Consultation",
    image: "good.jpg",
    mobileImage: "goodphone.jpg",
    schemaType: "MedicalProcedure",
    schemaName: "Wisdom Tooth Extraction",
  },
  {
    title: "Perfect Smile Journey: Braces & Aligners",
    text: "Lahore's #1 Invisible Orthodontics. Get camera-ready confidence with our discreet alignment systems.",
    cta: "View Smile Gallery",
    image: "good.jpg",
    mobileImage: "goodphone.jpg",
    schemaType: "MedicalProcedure",
    schemaName: "Orthodontic Treatment",
  },
  {
    title: "Advanced Root Canal Therapy",
    text: "Save your natural teeth with our painless technology. 98% success rate with permanent results.",
    cta: "Download Price List",
    image: "good.jpg",
    mobileImage: "goodphone.jpg",
    schemaType: "MedicalProcedure",
    schemaName: "Root Canal Treatment",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  name: "Dental Dynamics",
  url: "https://dentaldynamics.pk",
  logo: "https://dentaldynamics.pk/logo.png",
  image: slides[0].image,
  telephone: "+92-321-6739504",
  priceRange: "PKR 500 - 15,000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "31,32 Bank Square Market, Block C Model Town",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54700",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.488044262388232,
    longitude: 74.32627496222497,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "31",
    bestRating: "5",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: { "@type": "Person", name: "Ayesha Khan" },
    reviewBody:
      "Finally found dentists who make root canals completely painless! The laser technology made all the difference.",
  },
  sameAs: [
    "https://www.facebook.com/DentalDynamicsPakistan/",
    "https://www.instagram.com/dentaldynamicspakistan",
  ],
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const isMobile = useIsMobile();
  const phoneNumber = "+923008444631";

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Animation variants
  const textVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Dental Services Carousel"
    >
      <Helmet>
        <title>Premium Dental Care in Lahore | Dental Dynamics</title>
        <meta
          name="description"
          content="Lahore's top-rated dental clinic offering painless wisdom tooth removal, invisible braces, and advanced root canal treatments. Book your smile transformation today!"
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": slides[current].schemaType,
            name: slides[current].schemaName,
            provider: {
              "@type": "Dentist",
              name: "Dental Dynamics Team",
            },
            location: schemaData.address,
          })}
        </script>
      </Helmet>

      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={
                isMobile && slides[current].mobileImage
                  ? slides[current].mobileImage
                  : slides[current].image
              }
              alt={slides[current].title}
              className="w-full h-full object-fill"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay Text & CTAs */}
      <div className="container relative mx-auto h-full flex flex-col justify-end pb-16 md:pb-24 z-10 px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="space-y-4 md:space-y-6"
            >
              <motion.h1
                className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg"
                transition={{ delay: 0.1 }}
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-white max-w-lg drop-shadow-md"
                transition={{ delay: 0.2 }}
              >
                {slides[current].text}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center gap-3 pt-2"
                transition={{ delay: 0.3 }}
              >
                {/* Primary CTA */}
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  aria-label="Book appointment via WhatsApp"
                >
                  <span>📱</span> {slides[current].cta}
                </a>

                {/* Secondary CTA */}
                <a
                  href="tel:+923008444631"
                  className="ml-0 sm:ml-4 border border-white text-white hover:bg-white/20 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  aria-label="Call our clinic"
                >
                  Or Call: +92 300 8444631
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators & Navigation */}
        <div className="flex justify-between items-end">
          {/* Dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-emerald-400 w-8"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex space-x-3">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="absolute bottom-4 left-4 bg-black/60 text-white/80 py-1.5 px-3 rounded-full text-sm backdrop-blur-sm z-20">
        ★★★★★ 4.9/5 from 30 reviews
      </div>
    </section>
  );
}
