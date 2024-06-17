import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/index.jsx";
import OurServicesPage from "./pages/OurServices/index.jsx";
import AboutUsPage from "./pages/AboutUs/index.jsx";
import Layout from "./layout";
import Login from "./login/Login";
import SignUp from "./login/signUp";
import ServiceDetailPage from "./pages/ServiceDetails/index.tsx";
import Seperator from "./components/serperator/serperator.js";
import UserProfile from "./pages/UserProfile/index.tsx";
import DocPage from "./pages/ApiScript/index.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPage from "./pages/NotFount/index.jsx";
import FAQPage from "./pages/FAQ/index.tsx";
import FeedbackForm from "./pages/ContactUs/index.jsx";
import { AuthProvider } from "./auth";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
                <Seperator />
                <AboutUsPage />
                <Seperator />
                <OurServicesPage />
                <Seperator />
                <FAQPage />
                <Seperator />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/services/:slug"
            element={
              <Layout>
                <ServiceDetailPage />
              </Layout>
            }
          />

          <Route
            path="/script-api-page"
            element={
              <ProtectedRoute
                element={() => (
                  <Layout>
                    <DocPage />
                  </Layout>
                )}
              />
            }
          />
          <Route
            path="/faq"
            element={
              <ProtectedRoute
                element={() => (
                  <Layout>
                    <FAQPage />
                  </Layout>
                )}
              />
            }
          />
          <Route
            path="/user-profile"
            element={
              <ProtectedRoute
                element={() => (
                  <Layout>
                    <UserProfile />
                  </Layout>
                )}
              />
            }
          />

          <Route path="/contact-us" element={<FeedbackForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
