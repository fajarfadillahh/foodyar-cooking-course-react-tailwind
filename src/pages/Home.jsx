import React from "react";

// import components & parts
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import Special from "../parts/HomePage/Special";
import Testimonial from "../parts/HomePage/Testimonial";
import Statistic from "../parts/HomePage/Statistic";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Special />
      <Testimonial />
      <Statistic />
    </>
  );
}
