import React from "react";
import NavBar from "./pages/NavBar";
import ContactUsPage from "./pages/contactUsPage";
import "./index.css";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <ContactUsPage />
    </>
  );
};

export default Layout;
