import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
// The layout with Navbar and Footer
import App from "./App"; // The home page
 // Species detail page
import Layout from "./Layout";
import TeethScalingPolishingPage from "./pages/Polishing";
import FluorideTreatment from "./pages/Fluoride";
import TeethWhiteningPage from "./pages/TeethWHite";
import SmileMakeoverLandingPage from "./pages/SmileMakeover";
import DentalVeneersPage from "./pages/Veneers";
import DentalFillingsLandingPage from "./pages/DentalFillings";
import DentalCrownsBridgesLandingPage from "./pages/DentalCrown";
import DentalImplantsLandingPage from "./pages/DentalImplantsFaisalabad";
import BracesAndAlignersLandingPage from "./pages/Braces";
import RootCanalLandingPage from "./pages/RootCanal";
import WisdomToothExtractionLandingPage from "./pages/WisdomTooth";
import PediatricDentistryLandingPage from "./pages/Pediatric";
import GumDiseaseTreatment from "./pages/GumDisease";
import EmergencyDentistFaisalabad from "./pages/Emergency";
import MaxillofacialSurgeryFaisalabad from "./pages/Maxillofacial";
import TMJTreatmentFaisalabad from "./pages/Tmj";
import DentalCheckupLandingPage from "./pages/DentalCeckup";
import BlogsPage from "./pages/Blogs";
import BlogDetailPage from "./pages/BlogDetails";
import BookAppointment from "./pages/BookAppointment";
import ServicesPage from "./pages/Servicespage";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, // Always show Layout (with Navbar & Footer)
    children: [
      {
        path: "/", // Home route
        element: <App />, // Show App component in the Layout
      },
 {
    path:"/booking",
    element:<BookAppointment/>
  },
   {
    path:"/services",
    element:<ServicesPage/>
  }   // Add more routes here as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);