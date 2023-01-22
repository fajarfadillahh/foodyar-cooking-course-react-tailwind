import React from "react";
import { RiPlayFill } from "react-icons/ri";

// import components
import Button from "../../components/Button";

// import images
import HeroImg from "../../assets/images/hero-picture.png";

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero__container container grid justify-items-center gap-12">
        <div className="hero__overlay relative flex items-center justify-center">
          <img src={HeroImg} alt="hero img" className="hero__overlay-img" />
          <div className="hero__overlay-play absolute inline-flex cursor-pointer rounded-full bg-pink-200 p-3 text-[2rem] text-white">
            <RiPlayFill />
          </div>
        </div>

        <div className="hero__data text-center">
          <h1 className="hero__data-title section-title">
            Eat what you cook with us Together!
          </h1>
          <p className="hero__data-text section-text pb-8">
            When you eat something that you cooked by yourself, the happiness is
            priceless.
          </p>
          <Button
            url="/menu"
            className="hero__data-button bg-yellow-400 hover:bg-yellow-500"
          >
            Decide a Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
