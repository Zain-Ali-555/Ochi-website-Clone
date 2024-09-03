import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.5"
        className="main w-full h-screen bg-[#f1f1f1] pt-1"
      >
        <div className="txtStructure mt-40 px-12">
          {["We create", "Eye-opening", "presentations"].map((items, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9.5vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover w-[9.5vw] h-[6vw] relative top-0 mr-5 left-2 rounded-lg"
                    ></motion.div>
                  )}
                  <h1 className="font-bold text-9xl leading-[6.5vw] uppercase">
                    {items}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="landBottom border-t-[1px] border-zinc-400 mt-32 flex justify-between py-5 px-20">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((items, index) => (
            <p key={index} className="text-[16px] tracking-tight">
              {items}
            </p>
          ))}
          <div className="flex justify-center items-center gap-1">
            <h3 className="border-[1px] border-black rounded-[50px] py-[3px] px-4 uppercase">
              Start the project
            </h3>
            <div className="arrowIcon border-[1px] border-black rounded-[50%] p-[.30rem] text-xl">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
