import React from "react";

// import components & parts
import Header from "../components/Header";
import ErrorMessage from "../parts/NotFound/ErrorMessage";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <ErrorMessage />
      <Footer />
    </>
  );
}
