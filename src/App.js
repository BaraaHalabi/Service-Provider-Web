import React from "react";
import HomePage from "./pages/homePage";
import OurServicesPage from "./pages/ourServicesPage";
import ContactUsPage from "./pages/contactUsPage";
import AboutUsPage from "./pages/aboutUsPage";
import Layout from "./layout";
export default function App() {
  return (
    <Layout>
      <HomePage />
      <AboutUsPage />
      <OurServicesPage />
      <ContactUsPage />
    </Layout>
  );
}
