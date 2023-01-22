import React from "react";
import { RiStarFill } from "react-icons/ri";

// import images
import SpecialImg1 from "../../assets/images/special-image-1.png";
import SpecialImg2 from "../../assets/images/special-image-2.png";
import SpecialImg3 from "../../assets/images/special-image-3.png";
import SpecialImg4 from "../../assets/images/special-image-4.png";

export default function Special() {
  return (
    <section className="special section">
      <div className="special__container container grid justify-items-center gap-12">
        <div className="special__data text-center">
          <p className="special__text section-text pb-2">Watch Now</p>
          <h1 className="special__title section-title">
            Special for all of you to should Try
          </h1>
          <p className="special__text section-text">
            We have made tutorials video, how to make dishes with recipes to be
            delicious.
          </p>
        </div>

        <div className="special__group grid grid-cols-2 justify-center gap-8">
          <div className="special__card grid justify-items-center gap-4">
            <img
              src={SpecialImg1}
              alt="special img"
              className="special__card-img"
            />

            <div className="special__card-data text-center">
              <h3 className="special__card-title pb-1 font-bold text-gray-900">
                Salad Kiwi Sugga
              </h3>
              <p className="special__card-chef pb-3 text-[14px] text-gray-600">
                Amir Sumantha
              </p>
              <ul className="special__card-list flex items-center justify-center gap-1 text-[1rem] text-yellow-400">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </ul>
            </div>
          </div>

          <div className="special__card grid justify-items-center gap-4">
            <img
              src={SpecialImg2}
              alt="special img"
              className="special__card-img"
            />

            <div className="special__card-data text-center">
              <h3 className="special__card-title pb-1 font-bold text-gray-900">
                Avocado Muscle
              </h3>
              <p className="special__card-chef pb-3 text-[14px] text-gray-600">
                Jhon Lemansk
              </p>
              <ul className="special__card-list flex items-center justify-center gap-1 text-[1rem] text-yellow-400">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </ul>
            </div>
          </div>

          <div className="special__card grid justify-items-center gap-4">
            <img
              src={SpecialImg3}
              alt="special img"
              className="special__card-img"
            />

            <div className="special__card-data text-center">
              <h3 className="special__card-title pb-1 font-bold text-gray-900">
                Bayam Red Poppeye
              </h3>
              <p className="special__card-chef pb-3 text-[14px] text-gray-600">
                Ahmad Al Ghifari
              </p>
              <ul className="special__card-list flex items-center justify-center gap-1 text-[1rem] text-yellow-400">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </ul>
            </div>
          </div>

          <div className="special__card grid justify-items-center gap-4">
            <img
              src={SpecialImg4}
              alt="special img"
              className="special__card-img"
            />

            <div className="special__card-data text-center">
              <h3 className="special__card-title pb-1 font-bold text-gray-900">
                Javanicca Fruity
              </h3>
              <p className="special__card-chef pb-3 text-[14px] text-gray-600">
                Imelda Wattson
              </p>
              <ul className="special__card-list flex items-center justify-center gap-1 text-[1rem] text-yellow-400">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
