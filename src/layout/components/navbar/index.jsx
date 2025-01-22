import logo from "../../../assets/logo.svg";
import iconHamburger from "../../../assets/icon-hamburger.svg";
import { NavLink } from "react-router-dom";
import { Button } from "../../../generalComponents";
import { MobileNav } from "./components";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between gap-2 md:gap-12 lg:gap-20 px-6 pt-12 md:px-10 md:pt-16 lg:pt-[73px] xl:max-w-[1110px] xl:px-0 xl:mx-auto">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="My team logo" className="h-8 lg:h-10" />
      </div>

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
  );
};
