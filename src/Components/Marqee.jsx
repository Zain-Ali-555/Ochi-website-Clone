// import { motion } from "framer-motion";

import { motion } from "framer-motion";

const Marqee = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.0009"
        className="bg-[#004d43] pb-20 pt-20 w-full overflow-hidden rounded-tl-[25px] rounded-tr-[25px]"
      >
        <div className="txt flex whitespace-nowrap font-bold uppercase pl-5 border-y-[1px] pb-12 border-zinc-400 items-center text-white">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="marqueetxt px-10 text-[30vw] leading-[.6]"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="marqueetxt px-10 text-[30vw] leading-[.6]"
          >
            We are ochi
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Marqee;
