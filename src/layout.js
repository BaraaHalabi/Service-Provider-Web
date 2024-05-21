// Layout.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import NavBar from "./pages/NavBar";
import ContactUsPage from "./pages/ContactUs";
import "./index.css";

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.substring(1), {
        duration: 100,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top for home link
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <main>{children}</main>
      <ContactUsPage />
    </>
  );
};

export default Layout;
