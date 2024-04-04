import React from "react";

//components
import TestimonialSlider from "./testimonialSlider";
export default function Testimonial() {
  return (
    <section className="section flex items-center " id="testimonials">
      <div className="container mx-auto">
        <TestimonialSlider />
      </div>
    </section>
  );
}
