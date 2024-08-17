import React from "react";
import Navigation from "../components/navigation";
import InkRing from "../assets/ink-ring.svg";
import Hero from "../components/hero";
import ramenHome from "../assets/ramen-home.png";
import noise from "../assets/noise.png";
import AboutUsButton from "./AboutUsButton";

// z-index:
// -1: noise texture
// -2: background
// > 0 : content

function HomePage() {
  return (
    <div className="App bg-gradient-blue h-[100vh] relative z-0">
      {/* disable TS warning for next line */}
      {/* @ts-ignore */}
      <InkRing className="absolute top-[22.36vh] left-[-28.44vw] fill-Light-Gray -z-10 -rotate-12" />
      <Navigation
        activeItem={0}
        navItems={[{ text: "Home" }, { text: "Menu" }, { text: "Blog" }]}
        isOpen={true}
      />
      <div className="container mx-auto">
        <div className="z-10 relative flex flex-col justify-end items-end h-[85vh]">
          <Hero />
          <AboutUsButton />
        </div>
      </div>
      {/* Ramen Image */}
      <img
        src={noise}
        alt="Noise Texture"
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="flex flex-row items-end z-10 absolute left-[16px] bottom-[16px]">
        <img src={ramenHome} alt="Ramen Home" className="w-[430px] h-auto " />
        <div className="font-inria-serif font-normal text-xl leading-tight inline-block mb-[2rem] -ml-4">
          <span className="font-inter font-semibold">Try Our</span>
          <br />{" "}
          <a
            className="text-2xl visited:text-black no-underline hover:underline font-500"
            href="#"
          >
            Signature Beef Ramen
          </a>
        </div>
      </div>
      {/* <div className="container mx-auto relative">
        <div className="absolute right-0 bottom-2">
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;
