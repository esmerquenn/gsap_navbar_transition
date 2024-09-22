import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Menu.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About Me" },
  { path: "/projects", label: "Project" },
];
function Nav() {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const tl = useRef();
  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    isMenuOpen ? tl.current.play() : tl.current.reverse();
  }, [isMenuOpen]);

  const handleClick = () => {
    toggleMenu();
  };
  return (
    <div className="menu-container uppercase " ref={container}>
      <div className="menu-bar text-lightGreen fixed top-0 left-0 w-screen p-8 flex justify-between  z-20 items-center">
        <div className="menu-logo text-3xl">
          <Link to="/">Esmer</Link>
        </div>
        <div className="menu-open z-50  text-3xl cursor-pointer" onClick={toggleMenu}>
          Menu
        </div>
      </div>

      <div className="menu-overlay  fixed  top-0 left-0 w-screen p-8 h-screen bg-lightGreen z-30 flex ">
        <div>
          <div className="menu-overlay-bar ">
            <div className="menu-logo  text-3xl">
              <Link to="/">Esmer</Link>
            </div>
          </div>
          <div className="menu-close-icon flex  cursor-pointer items-end p-8 ">
            <p className={`text-red text-3xl ${isMenuOpen ? "fixed top-6 right-6 " : " static hidden"}`} onClick={toggleMenu}>
              &#x2715;
            </p>
          </div>
        </div>
        <div className="menu-copy pt-32  flex flex-col w-2/3 items-center justify-between md:pt-12">
          <div className="menu-links">
            {menuLinks.map((item, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder relative" onClick={handleClick}>
                  <Link
                    className="menu-link text-black  text-6xl md:text-7xl font-normal tracking-tighter leading-none"
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info-col">
            <p>esmereshraty@gmail.com</p>
            <p>+994503344549</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
