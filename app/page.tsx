import About from "./components/About";
import BackToTopBtn from "./components/backToTopBtn";
import Cars from "./components/cars";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Testimonial from "./components/testimonial";
import Why from "./components/why";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
