import * as React from "react";
import Arrow from "../assets/arrow.svg";

export interface IAboutUsButtonProps {
  onClick?: () => void;
}

export default function AboutUsButton(props: IAboutUsButtonProps) {
  return (
    <div
      className="h-20 justify-end items-end gap-6 inline-flex cursor-pointer"
      onClick={props.onClick}
    >
      <div className="w-36 flex-col justify-center items-end inline-flex">
        <div className="text-black text-3xl font-normal font-inter">
          About Us
        </div>
        <div className="self-stretch text-right text-black text-4xl font-normal font-['Source Han Sans VF']">
          关于我们
        </div>
      </div>
      <Arrow />
    </div>
  );
}
