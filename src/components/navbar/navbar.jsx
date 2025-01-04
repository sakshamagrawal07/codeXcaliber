import { motion } from "framer-motion"
import { useState } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  // const [visible, setVisible] = useState(true);

  window.onscroll = () => {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "1.25rem";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <motion.div
      className="z-10 fixed top-5 left-0 right-0 mx-auto flex justify-center text-sm xs:text-xl iceland-font"
      id="navbar"
      initial={{
        width: 0
      }}
      animate={{
        width: "auto",
        transition: {
          duration: 0.3
        }
      }}
    >
      <motion.div
        className="h-[50px] w-[30rem] rounded-[50px] flex items-center justify-between bg-[#1a1a1a] p-5 "
        initial={{
          width: 0
        }}
        animate={{
          width: "30rem",
          transition: {
            duration: 0.3
          }
        }}
      >
        <div
          className="bg-transparent flex items-center gap-10"
        >
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="cursor-pointer"
            href="#aboutUs"
          >
            About Us
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="cursor-pointer"
            href="#projects"
          >
            Projects
          </motion.a>
        </div>
        <a href="#home">
        <img
          className="h-10 aspect-square cursor-pointer"
          src="/images/x.png"
          alt="x"
        />
        </a>
        <div
          className="bg-transparent flex items-center gap-10"
        >
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="cursor-pointer"
            href="#sponsors"
          >
            Sponsors
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="cursor-pointer"
            href="#faqs"
          >
            FAQs
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;