import React from "react";

// import components & parts
import Button from "../../components/Button";

export default function ErrorMessage() {
  return (
    <div className="error flex h-screen w-full items-center justify-center">
      <div className="error__data text-center">
        <h1 className="error__title section-title xl:text-[52px]">
          404 Not Found
        </h1>
        <p className="error__text section-text pb-8">
          We can't found the page you <br /> are looking for.
        </p>
        <Button url="/" className="error__button md:inline-flex">
          Back to home
        </Button>
      </div>
    </div>
  );
}
