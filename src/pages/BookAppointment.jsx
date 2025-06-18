import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export default function BookAppointment() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-xl text-gray-900"
      >
        <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <CalendarCheck className="text-blue-600 w-6 h-6" />
            <h1 className="text-3xl font-bold tracking-tight">
              Book Your Appointment
            </h1>
          </div>

          <p className="text-lg mb-6 text-gray-700">
            At Dental Dynamics Clinic, your smile deserves nothing less than expert care. 
            Our friendly team is here to provide world-class dental solutions in a comfortable, modern setting. 
            Whether you're due for a checkup or looking for a complete smile makeover, 
            booking your appointment takes just a moment.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Preferred Date & Time</label>
              <input
                type="datetime-local"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Your Concern (Optional)</label>
              <textarea
                rows={3}
                placeholder="Tell us about your dental needs..."
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition"
            >
              Confirm Appointment
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}