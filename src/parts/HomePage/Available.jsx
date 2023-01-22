import React from "react";

// import images
import AvailableImg from "../../assets/images/available-image.png";
import Available1 from "../../assets/images/available-1.png";
import Available2 from "../../assets/images/available-2.png";
import { Link } from "react-router-dom";

export default function Available() {
  return (
    <section className="available section">
      <div className="available__container container grid justify-items-center gap-12 xs:max-w-sm sm:max-w-md md:max-w-3xl md:grid-cols-2 md:items-center lg:max-w-4xl xl:max-w-5xl">
        <img
          src={AvailableImg}
          alt="available img"
          className="available__img xl:w-[400px]"
        />

        <div className="available__data text-center md:text-left">
          <h1 className="available__title section-title">
            Download our App and join the Contest
          </h1>
          <p className="available__text section-text pb-8 sm:mx-auto sm:max-w-sm md:mx-0">
            In order to improve our cooking skills, we do need a food
            professional photography.
          </p>
          <div className="available__buttons inline-flex items-center gap-4">
            <Link to="/" className="available__button">
              <img
                src={Available1}
                alt=""
                className="available__playstore h-9 w-32"
              />
            </Link>
            <Link to="/" className="available__button">
              <img
                src={Available2}
                alt=""
                className="available__appstore h-9 w-32"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
