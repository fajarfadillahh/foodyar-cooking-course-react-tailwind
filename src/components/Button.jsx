import React from "react";
import { Link } from "react-router-dom";

export default function Button({ url, children, className }) {
  return (
    <Link
      to={url}
      className={
        `flex h-[52px] items-center justify-center rounded-t-[40px] rounded-b-[20px] bg-pink-200 py-4 px-8 font-bold text-gray-900 hover:bg-pink-300`.concat(
          " "
        ) + className
      }
    >
      {children}
    </Link>
  );
}
