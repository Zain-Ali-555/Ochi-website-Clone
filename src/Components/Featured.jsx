import { motion, useAnimation } from "framer-motion";

/* eslint-disable react/jsx-key */
const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  let handelHoverStart = (index) => {
    cards[index].start({ y: "0" });
  };

  let handelHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <>
      <div className="w-full bg-[#f1f1f1]">
        <h1 className="text-5xl pt-20 pb-10 px-10 border-b-[1px] border-zinc-400">
          Featured projects
        </h1>
        <div className="boxContainer flex gap-5 px-10 pt-10">
          <motion.div
          
            onHoverStart={() => {
              handelHoverStart(0);
            }}
            onHoverEnd={() => {
              handelHoverEnd(0);
            }}
            className="box relative w-1/2 rounded-xl"
          >
            <h1 className="absolute flex overflow-hidden z-10 top-[50%] left-full -translate-x-1/2 -translate-y-1/2 text-[#cdea68] uppercase text-8xl font-bold">
              {"Cardboard Spaceship".split("").map((elem, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.019,
                  }}
                  className="inline-block"
                >
                  {elem}
                </motion.span>
              ))}
            </h1>
            <div className="imgBox h-full w-full overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
           
            onHoverStart={() => {
              handelHoverStart(1);
            }}
            onHoverEnd={() => {
              handelHoverEnd(1);
            }}
            className="box relative w-1/2 rounded-xl "
          >
            <h1 className="absolute flex overflow-hidden z-10 top-[50%] right-full translate-x-1/2 -translate-y-1/2 text-[#cdea68] uppercase text-8xl font-bold">
              {"AH2 & Matt Horn".split("").map((elem, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.019,
                  }}
                  className="inline-block"
                >
                  {elem}
                </motion.span>
              ))}
            </h1>
            <div className="imgBox h-full w-full overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Featured;
