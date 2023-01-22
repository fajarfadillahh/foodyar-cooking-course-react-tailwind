import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY >= 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll fixed right-6 z-20 inline-flex cursor-pointer items-center justify-center rounded-xl bg-pink-200 p-3 text-[1.5rem] text-gray-900 transition-all duration-400 hover:bg-pink-300 xl:right-12 ${
        visible ? "bottom-12 xl:bottom-16" : "-bottom-full"
      }`}
      onClick={scrollToTop}
    >
      <RiArrowUpLine />
    </div>
  );
}
