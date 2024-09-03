import { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    });
  });

  return (
    <>
      <div className="eyes h-screen w-full overflow-hidden">
        <div data-scroll data-scroll-speed="-.8" className="relative h-full w-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
          <div className="flex gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="circle bg-white flex justify-center items-center rounded-full w-56 h-56">
              <div className="bg-[#212121] relative rounded-full w-36 h-36">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="line w-full absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-5 rotatedeg-90"
                >
                  <div className="bg-white rounded-full w-5 h-5"></div>
                </div>
              </div>
            </div>
            <div className="circle bg-white flex justify-center items-center rounded-full w-56 h-56">
              <div className="bg-[#212121] relative rounded-full w-36 h-36">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                   className="line w-full absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-5 rotate-90"
                >
                  <div className="bg-white rounded-full w-5 h-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
