import React from "react";

export default function Statistic() {
  return (
    <section className="statistic py-16">
      <div className="statistic__container container">
        <div className="statistic__group grid grid-cols-2 justify-items-center gap-6 md:mx-auto md:max-w-lg lg:max-w-3xl lg:grid-cols-4 xl:max-w-5xl">
          <div className="statistic__content text-center">
            <h3 className="statistic__content-number pb-1 text-[28px] font-bold text-gray-900 xs:text-[32px] sm:text-[36px]">
              180.000+
            </h3>
            <p className="statistic__content-text text-[14px] text-gray-600">
              Menu Food
            </p>
          </div>

          <div className="statistic__content text-center">
            <h3 className="statistic__content-number pb-1 text-[28px] font-bold text-gray-900 xs:text-[32px] sm:text-[36px]">
              20.000+
            </h3>
            <p className="statistic__content-text text-[14px] text-gray-600">
              Professional Chef
            </p>
          </div>

          <div className="statistic__content text-center">
            <h3 className="statistic__content-number pb-1 text-[28px] font-bold text-gray-900 xs:text-[32px] sm:text-[36px]">
              2800+
            </h3>
            <p className="statistic__content-text text-[14px] text-gray-600">
              Variant Courses
            </p>
          </div>

          <div className="statistic__content text-center">
            <h3 className="statistic__content-number pb-1 text-[28px] font-bold text-gray-900 xs:text-[32px] sm:text-[36px]">
              1.200.000+
            </h3>
            <p className="statistic__content-text text-[14px] text-gray-600">
              Alumnies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
