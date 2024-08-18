import * as React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";

interface navItemProps {
  text: string;
}

export interface navigationProps {
  navItems: navItemProps[];
  activeItem: number;
  isOpen?: boolean;
  setActiveItem?: any;
}

export default function App(props: navigationProps) {
  const navLinkClasses =
    "text-black text-[18px] font-noto-sans-kayah-li font-normal tracking-wide block no-underline";
  return (
    <div className="w-full h-[85px] bg-transparent sticky top-0 left-0 z-20">
      <div className="container mx-auto h-full flex flex-row items-center justify-between">
        <div className="justify-center items-center gap-8 inline-flex">
          <div className="relative">
            <div className=" text-black text-[21px] font-normal font-['Huiwen-mincho'] leading-loose flex flex-row items-center gap-2">
              <Icon
                icon={`${props.isOpen ? "mingcute:sun-fill" : "mingcute:moon-fill"}`}
                className="text-black w-[20px] h-[20px] inline-block"
              />
              <span>{props.isOpen ? "Open" : "Closed"}</span>
            </div>
          </div>
          <div className="text-[21px] font-['Huiwen-mincho'] leading-loose">
            <a
              href="tel:6008233303"
              className="active:text-black visited:text-black text-black font-normal"
            >
              600 823 3303
            </a>
          </div>
        </div>
        <div className="justify-center items-center gap-[17px] inline-flex">
          {props.navItems.map((item, index) => {
            return (
              <>
                <a
                  key={item.text}
                  className={`${navLinkClasses} ${
                    index === props.activeItem ? "!font-bold" : ""
                  }`}
                  href="#"
                  onClick={() => props.setActiveItem(index)}
                >
                  {item.text}
                </a>
                {index !== props.navItems.length - 1 && (
                  <div className="text-black text-xl font-normal font-noto-sans-kayah-li tracking-wide">
                    /
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
