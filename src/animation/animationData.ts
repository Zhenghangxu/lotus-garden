export const globalTransition = {
  easeIn: "easeInOut",
  duration: 1,
  type: "tween",
};
export const homeAnimation = [
  {
    objectName: "InkRing",
    data: {
      start: {
        opacity: 0,
        rotate: 0,
      },
      end: {
        opacity: 1,
        rotate: -30,
      },
    },
  },
  {
    objectName: "Hero",
    data: {
      start: {
        opacity: 0,
        y: 30,
      },
      end: {
        opacity: 1,
        y: -30,
      },
    },
  },
];
