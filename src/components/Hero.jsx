import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="text-white text-center flex flex-col justify-center place-items-center w-full gap-8 md:gap-10 lg:gap-12 h-screen">
      <p className="text-2xl sm:text-4xl blackOutline">I'm passionate about</p>
      <TypeAnimation
        className="text-primary-light text-4xl sm:text-7xl blackOutline"
        sequence={[
          "Software Engineering!",
          4000,
          "Hyper Productivity!",
          4000,
          "Open Source!",
          4000,
        ]}
        repeat={Infinity}
        speed={20}
      />
      <a href="/contact" className="w-3/5 md:w-1/4">
        <button className=" bg-black rounded-xl text-nowrap text-xl lg:text-2xl border-2 border-primary-light w-full py-2 md:py-4 px-4 transform transition-transform duration-500 hover:scale-110">
          Let's get in touch!
        </button>
      </a>
    </div>
  );
}

export default Hero;
