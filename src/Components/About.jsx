const About = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.095"
        className="aboutTop bg-[#cdea68] w-full h-[115vh]"
      >
        <p className="border-b-[1px] text-[3.89vw] px-10 py-[5vw] border-zinc-500 leading-[6.5vh]">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <span className="underline">
            {" "}
            raise funds, sell prod­ucts, ex­plain com­plex ideas,
          </span>{" "}
          and <span className="underline">hire great peo­ple.</span>
        </p>
        <div className="aboutBottom flex justify-between px-10 py-6">
          <div className="aboutBottomLeft">
            <h1 className="text-[3.9vw] mb-3">Our approach:</h1>
            <button className="uppercase text-lg bg-black py-3 rounded-full gap-10 flex p-5 items-center text-white">
              <h1>Read More</h1>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </button>
          </div>
          <div className="aboutBottomRight">
            <img
              className="rounded-xl"
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
