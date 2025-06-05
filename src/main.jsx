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
    path: "/scaling-and-polishing-in-lahore", // Home route
    element: <TeethScalingPolishingPage />, // Show App component in the Layout

  },

  {
    path: "/Fluoride-Treatment-in-lahore", // Home route
    element: <FluorideTreatment />, // Show App component in the Layout

  },
  {
    path: "/Teeth-whitening-in-lahore", // Home route
    element: <TeethWhiteningPage />, // Show App component in the Layout

  },
  {
    path: "/Smile-Makeover-lahore", // Home route
    element: <SmileMakeoverLandingPage />, // Show App component in the Layout

  }, 
  {
    path: "/veneers-lahore", // Home route
    element: <DentalVeneersPage />, // Show App component in the Layout

  },
  {
    path: "/Dental-Fillings-lahore", // Home route
    element: <DentalFillingsLandingPage />, // Show App component in the Layout

  }, 
  {
    path: "/Dental-Crown-Bridges-lahore", // Home route
    element: <DentalCrownsBridgesLandingPage />, // Show App component in the Layout

  }, 
  {
    path: "/Dental-implants-lahore", // Home route
    element: <DentalImplantsLandingPage />, // Show App component in the Layout

  }, 
  {
    path: "/braces-aligners-lahore", // Home route
    element: <BracesAndAlignersLandingPage/>, // Show App component in the Layout

  }, 
  {
    path: "/root-canal-lahore", // Home route
    element: <RootCanalLandingPage/>, // Show App component in the Layout

  }, 
  {
    path: "/wisdom-tooth-extraction", // Home route
    element: <WisdomToothExtractionLandingPage/>, // Show App component in the Layout

  },
  {
    path: "/kids-dentist-lahore", // Home route
    element: <PediatricDentistryLandingPage/>, // Show App component in the Layout

  }, 
  {
    path: "/gum-disease-treatment", // Home route
    element: <GumDiseaseTreatment/>, // Show App component in the Layout

  },
  {
    path: "/emergency-dentist-lahore", // Home route
    element: <EmergencyDentistFaisalabad/>, // Show App component in the Layout

  }, 
  {
    path: "/maxillofacial-surgery", // Home route
    element: <MaxillofacialSurgeryFaisalabad/>, // Show App component in the Layout

  }, 
  {
    path: "/tmj-treatment-lahore", // Home route
    element: <TMJTreatmentFaisalabad/>, // Show App component in the Layout

  }, 
  {
    path: "/dental-checkup-lahore", // Home route
    element: <DentalCheckupLandingPage/>, // Show App component in the Layout

  },
  {
    path: "/blogs", // Home route
    element: <BlogsPage/>, // Show App component in the Layout

  },
  {
    path:"/blogs/:id/:slug",
    element:<BlogDetailPage/>
  }  // Add more routes here as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);