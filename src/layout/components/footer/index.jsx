import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import {
  IconFacebook,
  IconPinterest,
  IconTwitter,
} from "../../../assets/svgIconComponents";

export const Footer = () => {
  return (
    <footer className="px-6 py-16 md:px-10 md:py-14 lg:py-12 bg-secondary-dark-green text-primary-white text-b2 font-semibold">
      <div className="grid grid-rows-[repeat(5,min_content)] md:grid-rows-[min-content,min-content,min-content] md:grid-cols-[107px,280px] lg:grid-cols-[285px,1fr,1fr] lg:grid-rows-[min-content,min-content] justify-center md:justify-between text-center xl:max-w-[1110px] xl:px-0 xl:mx-auto">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 h-6 lg:h-10">
          <img src={logo} alt="My team logo" className="h-6 lg:h-10" />
        </div>

        {/* Links */}
        <div className="flex items-center md:items-end lg:items-center justify-center gap-6 font-semibold mt-6 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-2 md:mt-0 lg:justify-start lg:gap-10">
          <Link to="/" className="hover:text-primary-light-coral">
            home
          </Link>
          <Link to="/about" className="hover:text-primary-light-coral">
            about
          </Link>
        </div>

        {/* Info */}
        <div className="opacity-60 mt-6 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3  md:mt-0 md:text-right lg:text-left lg:mr-auto">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center lg:items-start gap-4 justify-center lg:justify-end lg:mt-0  mt-10 md:col-start-1 md:col-end-2 md:row-start-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 md:row-end-4 md:mt-8">
          <div className="hover:text-primary-light-coral">
            <IconFacebook />
          </div>
          <div className="hover:text-primary-light-coral">
            <IconPinterest />
          </div>
          <div className="hover:text-primary-light-coral">
            <IconTwitter />
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-4 opacity-60 md:mt-8 md:text-right lg:mt-0 lg:flex lg:items-end lg:justify-end">
          Copyright {new Date().getFullYear()}. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
