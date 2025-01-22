import logo from "../../../assets/logo.svg";
import iconHamburger from "../../../assets/icon-hamburger.svg";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../../../generalComponents";
import { MobileNav } from "./components";
import { useState } from "react";
import { div } from "framer-motion/client";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <div className="w-full sticky top-0 bg-primary-midnight-green z-20">
      <nav className="flex items-center justify-between gap-2 md:gap-12 lg:gap-20 px-6 pt-12 md:px-10 md:pt-16 lg:pt-[73px] xl:max-w-[1110px] xl:px-0 xl:mx-auto  ">
        {/* Logo */}
        <Link className="flex-shrink-0" to="/">
          <img src={logo} alt="My team logo" className="h-8 lg:h-10" />
        </Link>

        {/* Links */}

        <div className="hidden md:flex mr-auto text-b1 font-semibold text-primary-white items-center gap-10">
          <NavLink to="/">home</NavLink>
          <NavLink to="/about">about</NavLink>
        </div>

        {/* Contact Button */}
        <NavLink to="/contact" className="hidden md:block">
          <Button label="contact us" />
        </NavLink>

        <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />

        <button className="md:hidden" onClick={() => setIsMobileNavOpen(true)}>
          <img src={iconHamburger} alt="Hamburger Icon" />
        </button>
      </nav>
    </div>
  );
};
