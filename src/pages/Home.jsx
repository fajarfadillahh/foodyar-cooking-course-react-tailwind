import React from "react";

// import components & parts
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import Special from "../parts/HomePage/Special";
import Testimonial from "../parts/HomePage/Testimonial";
import Statistic from "../parts/HomePage/Statistic";
import Available from "../parts/HomePage/Available";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Special />
        <Testimonial />
        <Statistic />
        <Available />
      </main>
      <Footer />
    </>
  );
}
