import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  function toggleNav() {
    setAnimation(!animation);
    navOpen == true
      ? setTimeout(() => setNavOpen(!navOpen), 1000)
      : setNavOpen(!navOpen);
  }

  return (
    <div className=" h-fit text-white flex justify-end place-items-center blackOutline text-3xl m-4 absolute top-0 right-0 sm:right-6 z-[200] shadow-xl">
      <div
        className={`flex ${animation ? "px-7 navOpen" : "px-5 navClose"} py-1 justify-center flex-col rounded-xl sm:rounded-full pb-8 sm:pb-0 sm:flex-row place-items-end sm:place-items-center gap-8 h-fit w-fit  bg-black`}
      >
        {navOpen && (
          <a href="/">
            <p className="py-2 rounded-full  cursor-pointer">Home</p>
          </a>
        )}
        {navOpen && (
          <a href="/contact">
            <p className="py-2 rounded-full  cursor-pointer">Contact</p>
          </a>
        )}
        <p
          onClick={toggleNav}
          className={`py-2 rounded-full text-4xl ${navOpen ? "text-red-800 order-first md:order-last hover:text-red-600" : "text-white"} cursor-pointer`}
        >
          {navOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </p>
      </div>
    </div>
  );
};

export default Nav;
