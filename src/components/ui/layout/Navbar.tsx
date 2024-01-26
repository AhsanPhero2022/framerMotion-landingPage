import { NavLink } from "react-router-dom";
import { Button } from "../button";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
      className=" h-16 w-full fixed z-[999] bg-white"
    >
      <nav className=" w-full max-w-[1230px] mx-auto px-[20px] flex justify-between h-full items-center">
        <span className="text-2xl font-semibold">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
