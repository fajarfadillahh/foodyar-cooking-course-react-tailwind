import React from "react";

// import images
import TestimonialImg from "../../assets/images/testimonial-image.png";

export default function Testimonial() {
  return (
    <section className="testimonial section">
      <div className="testimonial__container container grid justify-items-center gap-8">
        <h1 className="testimonial__comment text-center text-[24px] font-medium text-gray-900">
          "Awalnya saya malu dengan mertua karena tidak bisa memasak, kini
          mereka lebih suka makan malam di rumah demi menyantap masakan yang
          saya buat sendiri."
        </h1>

        <div className="testimonial__profile inline-flex items-center gap-4">
          <img
            src={TestimonialImg}
            alt="testimonial profile"
            className="testimonial__img w-16"
          />

          <div>
            <h3 className="testimonial__name pb-1 text-[17px] font-semibold text-gray-900">
              Camella Sarah
            </h3>
            <p className="testimonial__profession text-gray-600">
              Vege. Master
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
