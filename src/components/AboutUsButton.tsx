import * as React from "react";
import Arrow from "../assets/arrow.svg";

export interface IAboutUsButtonProps {
  onClick?: () => void;
}

export default function AboutUsButton(props: IAboutUsButtonProps) {
  return (
    <div
      className="h-20 justify-end items-end gap-6 inline-flex cursor-pointer about-us-btn"
      onClick={props.onClick}
    >
      <div className="w-36 flex-col justify-center items-end inline-flex text-container">
        <div className="text-gray-800 text-3xl font-light font-inter">
          About Us
        </div>
        <div className="self-stretch text-right text-gray-800 text-4xl font-light font-inter">
          关于我们
        </div>
      </div>
    {/* @ts-ignore */}
      <Arrow className="arrow-ico" />
    </div>
  );
}
