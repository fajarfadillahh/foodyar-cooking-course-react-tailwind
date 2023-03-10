import React from "react";
import { Link } from "react-router-dom";

// import images
import FooterImg from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="footer pt-32 pb-8 transition-all duration-400 dark:bg-gray-900">
      <div className="footer__container container grid gap-20 xl:max-w-5xl">
        <div className="footer__group grid gap-10 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:justify-items-center">
          <div className="footer__content">
            <div className="footer__content-logo inline-flex items-center gap-2 pb-3 text-[20px] font-bold text-gray-900 dark:text-white">
              <img
                src={FooterImg}
                alt="footer img"
                className="footer__content-icon w-8"
              />
              Foodyar
            </div>
            <p className="footer__content-text section-text">
              The best cooking course <br />
              in the world.
            </p>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-5 text-[20px] font-bold text-gray-900 dark:text-white">
              Special Courses
            </h3>

            <ul className="footer__content-list flex flex-col gap-3">
              {[
                ["Wedding Food", "/wedding-food"],
                ["Healthy & Muscle", "/healthy-muscle"],
                ["Office Food Daily", "/office-food"],
                ["Happy Kids", "/happy-kids"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="footer__content-link text-gray-600 hover:text-pink-200 hover:underline dark:text-white dark:hover:text-pink-200"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-5 text-[20px] font-bold text-gray-900 dark:text-white">
              Our Company
            </h3>

            <ul className="footer__content-list flex flex-col gap-3">
              {[
                ["APIs Developer", "/apis-developer"],
                ["Career", "/career"],
                ["Terms & Conditions", "/terms-conditions"],
                ["Privacy Policy", "/privacy-policy"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="footer__content-link text-gray-600 hover:text-pink-200 hover:underline dark:text-white dark:hover:text-pink-200"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-5 text-[20px] font-bold text-gray-900 dark:text-white">
              Be Our Friend
            </h3>

            <p className="footer__content-text section-text">
              3, Season Park Jakarta <br />
              support@foodyar.co.id <br />
              021-1111-2222
            </p>
          </div>
        </div>

        <p className="footer__copyraights border-t border-gray-200 pt-8 text-center text-gray-600 dark:border-gray-600 dark:text-white">
          ?? Copyrights 2023 Foodyar. All rigths reserved | Develop by Fajar
          Fadillah A ??????
        </p>
      </div>
    </footer>
  );
}
