import React from "react";
import { useEffect } from "react";
import InkRing from "../assets/ink-ring.svg";
import Hero from "../components/hero";
import ramenHome from "../assets/ramen-home.png";
import AboutUsButton from "./AboutUsButton";
import { motion } from "framer-motion";
import { globalTransition, homeAnimation } from "../animation/animationData";

// z-index:
// -1: noise texture
// -2: background
// > 0 : content

function HomePage() {
  const inkRingAnimation = homeAnimation.find(
    (item) => item.objectName === "InkRing"
  );
  const HeroAnimationStack = homeAnimation.find(
    (item) => item.objectName === "Hero"
  );
  // const HeroAnimationStack = {
  //   start: {
  //     opacity: 0,
  //     y: 30,
  //   },
  //   end: {
  //     opacity: 1,
  //     y: -30,
  //   },
  // };
  // useEffect(() => {}, []);
  return (
    <div className="relative z-[3]">
      {/* disable TS warning for next line */}
      <motion.div
        initial="start"
        animate="end"
        exit="start"
        variants={inkRingAnimation?.data}
        transition={globalTransition}
        className="absolute top-[15.36vh] left-[-370px] -z-10"
      >
        {/* @ts-ignore */}
        <InkRing className="fill-Light-Gray rotate-45" />
      </motion.div>
      <div className="container mx-auto">
        <motion.div
          className="z-10 relative flex flex-col justify-end items-end h-[85vh]"
          initial="start"
          animate="end"
          exit="start"
          transition={{
            ...globalTransition,
            staggerChildren: 0.3,
          }}
          variants={HeroAnimationStack?.data}
        >
          <motion.div
            variants={HeroAnimationStack?.data}
            transition={globalTransition}
          >
            <Hero />
          </motion.div>
          <motion.div
            variants={HeroAnimationStack?.data}
            transition={globalTransition}
          >
            <AboutUsButton />
          </motion.div>
        </motion.div>
      </div>
      {/* Ramen Image */}
      <motion.div
        className="flex flex-row items-end z-10 absolute left-[16px] bottom-[-10px]"
        initial={{
          opacity: 0,
          x: -53,
        }}
        animate={{
          opacity: 1,
          x: 53,
        }}
        transition={globalTransition}
      >
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
      </motion.div>
      {/* <div className="container mx-auto relative">
        <div className="absolute right-0 bottom-2">
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;
