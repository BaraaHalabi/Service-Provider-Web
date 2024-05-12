import React from "react";
import HomePage from "./pages/Home/index.jsx";
import OurServicesPage from "./pages/ourServicesPage";
import AboutUsPage from "./pages/aboutUsPage";
import Layout from "./layout";
import Login from "./login/Login";
import SignUp from "./login/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoreServicesPage from "./pages/moreServicesPage.tsx";
import ServiceDetailPage from "./pages/serviceDetailPage.tsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
              <AboutUsPage />
              <OurServicesPage />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/more-services" element={<MoreServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </Router>
  );
}
