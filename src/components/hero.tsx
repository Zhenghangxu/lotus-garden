import * as React from "react";
import inkTextBg from "../assets/ink-text-bg.png";

export interface HeroProps {}

export default function Hero(props: HeroProps) {
  return (
    <div className="flex-col justify-center items-end gap-16 inline-flex mb-[25vh]">
      <div className="self-stretch justify-center items-center gap-14 inline-flex">
        <div className="text-black text-9xl font-normal font-kaushan-script tracking-widest">
          Lotus Garden
        </div>
        <div className="w-28 h-[11em] relative">
          <img
            className="w-full h-full top-0 absolute"
            src={inkTextBg}
            alt="Lotus Garden"
          />
          <div className="w-16 left-[22px] top-[12px] absolute text-white text-5xl font-normal font-huiwen-mincho">
            莲园
          </div>
        </div>
      </div>
      <div className="self-stretch text-right text-black text-4xl font-normal font-inter">
        Chinese & Japanese Cuisine
      </div>
    </div>
  );
}
