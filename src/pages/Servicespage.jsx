import React from "react";

const services = [
  {
    title: "Comprehensive Dental Checkup in Lahore",
    details: "Our thorough dental examination includes an oral health assessment, digital X-rays, gum evaluation, and oral cancer screening. This preventive visit helps identify issues early and keeps your smile in prime condition.",
    image: "/assets/images/dc.png",
  },
  {
    title: "Scaling & Polishing for Healthy Gums",
    details: "Utilizing ultrasonic and hand scaling techniques, we remove plaque and stubborn tartar below the gumline. Followed by polishing to eliminate surface stains, this treatment promotes gum health and a brighter smile.",
    image: "/assets/images/Scp.png",
  },
  {
    title: "Professional Fluoride Treatment",
    details: "A fast, non-invasive procedure where concentrated fluoride gel is applied to strengthen enamel, reduce sensitivity, and protect against cavities. Recommended after cleanings and ideal for all ages.",
    image: "/assets/images/ft.png",
  },
  {
    title: "LED-Accelerated Teeth Whitening",
    details: "Achieve up to eight shades of improvement in a single 60-minute session. Our enamel-safe whitening gel is activated by an LED light for faster, longer-lasting results without increasing sensitivity.",
    image: "/assets/images/tw.png",
  },
  {
    title: "Complete Smile Makeover",
    details: "Customize your perfect smile with a combination of cosmetic treatments—veneers, crowns, teeth whitening, and orthodontics. We develop a personalized plan to enhance aesthetics and function.",
    image: "/assets/images/sm.png",
  },
  {
    title: "Porcelain Veneers in Lahore",
    details: "Our ultra-thin, stain-resistant porcelain veneers cover chips, gaps, and discoloration. Each veneer is custom-crafted to match your natural teeth for a seamless, confident look.",
    image: "/assets/images/v.png",
  },
  {
    title: "Tooth-Colored Composite Fillings",
    details: "We restore decayed or fractured teeth using durable composite resin that bonds directly to enamel. Color-matched to your natural teeth, these fillings provide a discreet, long-lasting solution.",
    image: "/assets/images/fil.png",
  },
  {
    title: "Same-Day CEREC Crowns & Bridges",
    details: "With our in-office CEREC technology, we design, mill, and place custom ceramic crowns or bridges in a single visit. No temporary restorations—enjoy a precise fit and beautiful finish immediately.",
    image: "/assets/images/dcb.png",
  },
  {
    title: "Dental Implants in Lahore",
    details: "Replace missing teeth with biocompatible titanium implants topped with natural-looking crowns. Our implant procedures restore function, preserve bone, and blend seamlessly with your smile.",
    image: "/assets/images/dental-implants.png",
  },
  {
    title: "Braces & Clear Aligners",
    details: "Straighten teeth effectively with traditional metal braces or virtually invisible clear aligners. Our orthodontic treatments are tailored for comfort, speed, and minimal impact on your daily life.",
    image: "/assets/images/braces.png",
  },
  {
    title: "Pain-Free Root Canal Therapy",
    details: "Using advanced rotary instruments and local anesthesia, we gently clean and seal infected canals to save your natural tooth. Our approach minimizes discomfort and ensures effective, long-lasting relief.",
    image: "/assets/images/root-canal.png",
  },
  {
    title: "Wisdom Tooth Extraction",
    details: "Our experienced oral surgeons perform safe, precise removal of impacted or problematic wisdom teeth under sedation if needed. Post-operative care ensures a smooth, comfortable recovery.",
    image: "/assets/images/wisdom.png",
  },
  {
    title: "Pediatric Dentistry in Lahore",
    details: "Gentle, playful approach to children’s dental needs—from routine checkups to fluoride and sealants. We focus on education and comfort to establish lifelong healthy habits for your child.",
    image: "/assets/images/pediatric.png",
  },
  {
    title: "Gum Disease & Periodontal Treatment",
    details: "Treat gingivitis and periodontitis with deep cleaning (scaling and root planing), laser therapy, and maintenance plans. Protect your gums and prevent tooth loss with targeted periodontal care.",
    image: "/assets/images/gum.png",
  },
  {
    title: "Emergency Dental Care 24/7",
    details: "From sudden toothaches to chips and trauma, our on-call team provides immediate relief and treatment around the clock. Get fast, compassionate emergency care whenever you need it.",
    image: "/assets/images/emergency.png",
  },
  {
    title: "Maxillofacial Surgery",
    details: "Our skilled surgeons handle complex facial and jaw procedures, including corrective jaw surgery, trauma reconstruction, and oral pathology. Precision and patient comfort are our top priorities.",
    image: "/assets/images/max.png",
  },
  {
    title: "TMJ & Jaw Pain Relief",
    details: "Comprehensive evaluation and treatment for temporomandibular joint disorders including occlusal splints, physical therapy referrals, and minimally invasive interventions to restore comfort and function.",
    image: "/assets/images/jaw.png",
  },
  {
    title: "Zirconia Crown Restorations",
    details: "Choose high-strength, esthetic zirconia crowns for damaged or decayed teeth. These metal-free restorations offer superior durability, biocompatibility, and a natural look that lasts.",
    image: "/assets/images/zirconia1.png",
  },
];

const ServicesPage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          All Dental Services
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
