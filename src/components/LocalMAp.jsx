import React from 'react';

const LocalSEOSection = () => {
  return (
    <section
      id="location"
      aria-label="Dental Dynamics Location in Lahore"
      className="bg-white py-16 px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl tracking-wide text-gray-900 font-semibold mb-8">
          FIND DENTAL DYNAMICS IN MODEL TOWN, LAHORE
        </h2>

        {/* Map + Info */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Google Map iframe centered on coordinates */}
          <div className="w-full lg:w-4/5 h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Dental Dynamics Clinic Location"
              src="https://maps.google.com/maps?q=31.488053563837525,74.32627558706596&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Clinic Info */}
        <div className="mt-10 max-w-3xl mx-auto text-left space-y-4">
          <address className="not-italic">
            <p className="text-lg text-gray-700">
              <strong>Address:</strong>{' '}
              <span itemProp="streetAddress">
                4-Bank Square Market, C-Block, Model Town
              </span>,{' '}
              <span itemProp="addressLocality">Lahore</span>,{' '}
              <span itemProp="addressRegion">Punjab</span>,{' '}
              <span itemProp="postalCode">54700</span>,{' '}
              <span itemProp="addressCountry">PK</span>
            </p>
          </address>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong>{' '}
            <a
              href="tel:+923008444631"
              className="text-gray-900 hover:underline"
              itemProp="telephone"
            >
              +92 300 8444631
            </a>
          </p>
          <p className="text-lg text-gray-700">
            <strong>Service Areas:</strong> Bank Square Market, Block C,
            Model Town, Batapur, Gulberg, and surrounding neighborhoods.
          </p>
          <a
            href="https://g.co/kgs/eZSVfb5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition duration-300"
          >
            Need Directions? Open in Google Maps
          </a>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Dental Dynamics",
              image: "https://dentaldynamics.pk/logo.png",
              "@id": "https://dentaldynamics.pk#clinic",
              url: "https://dentaldynamics.pk",
              telephone: "+923008444631",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4-Bank Square Market, C-Block, Model Town",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                postalCode: "54700",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 31.488053563837525,
                longitude: 74.32627558706596,
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
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "11:00",
                  closes: "17:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/DentalDynamicsPakistan",
                "https://www.instagram.com/dentaldynamicspakistan",
              ],
            }),
          }}
        />
      </div>
    </section>
  );
};

export default LocalSEOSection;
