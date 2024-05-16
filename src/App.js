import React from "react";
import HomePage from "./pages/Home/index.jsx";
import OurServicesPage from "./pages/OurServices/index.jsx";
import AboutUsPage from "./pages/AboutUs/index.jsx";
import Layout from "./layout";
import Login from "./login/Login";
import SignUp from "./login/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoreServicesPage from "./pages/MoreServices/index.tsx";
import ServiceDetailPage from "./pages/ServiceDetails/index.tsx";
// import Seperator from "./components/serperator/serperator.js";
import PaymentPage from "./pages/Payment/index.tsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
              {/* <Seperator /> */}
              <AboutUsPage />
              {/* <Seperator /> */}

              <OurServicesPage />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/more-services" element={<MoreServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}
