import React from "react";
import HomePage from "./pages/homePage";
import OurServicesPage from "./pages/ourServicesPage";
import ContactUsPage from "./pages/contactUsPage";
import AboutUsPage from "./pages/aboutUsPage";
import Layout from "./layout";
import Login from "./login/Login";
import SignUp from "./login/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
              <ContactUsPage />
            </Layout>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
