import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white text-gray-700 text-sm py-4 px-6 shadow-sm border-b border-blue-100">
      {/* Mobile View */}
      <div className="flex sm:hidden pb-2 pt-2 justify-between w-full items-center">
       <a href="https://www.facebook.com/doctorteethdental"  
  target="_blank"  
  rel="noopener noreferrer">
  <div className="p-2 bg-white rounded-full shadow-sm border border-blue-100 hover:bg-blue-50 transition-all duration-200">
    <Facebook className="w-5 h-5 text-blue-600" />
  </div>
</a>              
        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 hover:from-red-600 hover:to-red-700 hover:shadow-xl transform hover:-translate-y-0.5">
          Book Appointment
        </button>
   <a 
 href="https://www.instagram.com/doctorteethclinic/"  
  target="_blank"  
  rel="noopener noreferrer">
  <div className="p-2 bg-white rounded-full shadow-sm border border-blue-100 hover:bg-blue-50 transition-all duration-200">
    <Instagram className="w-5 h-5 text-blue-600" />
  </div>
</a>
      </div>
       
      {/* Desktop View */}
      <div className="hidden sm:flex justify-between items-center w-full">
        {/* Left Side: Address & Phone */}
        <div className="flex items-center gap-8">
          <div className="flex items-center space-x-3 bg-white/80 px-4 py-3 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full">
              <MapPin className="w-4 h-4 text-blue-700" />
            </div>
            <span className="text-gray-700 font-medium">31,32, Bank Square Market, Block C Model Town, Lahore, 54700</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 px-4 py-3 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full">
              <Phone className="w-4 h-4 text-blue-700" />
            </div>
            <span className="text-gray-700 font-medium">+92 300 8444631</span>
          </div>
        </div>
         
        {/* Right Side: Social Icons & Buttons */}
        <div className="flex items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="https://www.facebook.com/doctorteethdental"  
    target="_blank"  
    rel="noopener noreferrer">
    <div className="p-3 bg-white rounded-full shadow-md border border-blue-100 hover:bg-blue-50 hover:shadow-lg hover:border-blue-200 transition-all duration-200 transform hover:-translate-y-1">
      <Facebook className="w-5 h-5 text-blue-600" />
    </div>
  </a>              
              <a 
   href="https://www.instagram.com/doctorteethclinic/"  
    target="_blank"  
    rel="noopener noreferrer">
    <div className="p-3 bg-white rounded-full shadow-md border border-blue-100 hover:bg-blue-50 hover:shadow-lg hover:border-blue-200 transition-all duration-200 transform hover:-translate-y-1">
      <Instagram className="w-5 h-5 text-blue-600" />
    </div>
  </a>
          </div>
           
          {/* Vertical Divider */}
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
           
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
             <a  
    href="https://wa.me/923216739504"  
    target="_blank"  
    rel="noopener noreferrer"
  >  
    <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-200 hover:from-red-600 hover:to-red-700 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
       Book Appointment
    </button>
  </a>
              <a  
    href="https://g.co/kgs/k3KWKpS"  
    target="_blank"  
    rel="noopener noreferrer"
  >  
    <button className="bg-white text-blue-600 border-2 border-blue-500 px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-md hover:shadow-lg transform hover:-translate-y-1">
      ⭐ Reviews
    </button>
  </a>
             </div>
        </div>
      </div>
    </div>
  );
}