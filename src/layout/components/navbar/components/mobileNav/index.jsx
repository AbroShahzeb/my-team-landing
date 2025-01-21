import { AnimatePresence, motion } from "framer-motion";
import { IconClose } from "../../../../../assets/svgIconComponents";
import { Link } from "react-router-dom";
import { Button } from "../../../../../generalComponents";
import bgPattern from "../../../../../assets/bg-pattern-about-1-mobile-nav-1.svg";

export const MobileNav = ({ isOpen, setIsOpen }) => {
  const variants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      {isOpen && (
        <>
          <div
            className="w-full fixed inset-0 h-svh bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            initial={"closed"}
            variants={variants}
            exit={"closed"}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed top-0 translate-x-full right-0 bottom-0  h-svh bg-secondary-police-blue z-50"
          >
            {/* Background Pattern */}
            <div className="absolute bottom-0 -right-0 translate-x-1/2">
              <img src={bgPattern} alt="Background Pattern" />
            </div>

            <div
              className="text-white mr-[25px] mt-14 flex justify-end hover:text-primary-light-coral"
              onClick={() => setIsOpen(false)}
            >
              <IconClose />
            </div>

            <div className="mt-10 flex flex-col gap-6 text-b1 font-semibold px-12 text-white ">
              <Link to="/" className="hover:text-primary-light-coral">
                home
              </Link>
              <Link to="/about" className="hover:text-primary-light-coral">
                about
              </Link>
              <Link className="mt-3" to="/contact">
                <Button label="contact us" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
