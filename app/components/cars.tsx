import React from "react";
import Brands from "./brands";
import CarSlider from "./carSlider";

export default function Cars() {
  return (
    <section className="h-screen flex items-center " id="cars">
      <div className="container mx-auto flex flex-col gap-y-10 lg:gap-y-8">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
}
