import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };

  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring", bounce: 0.5 },
    },
  };

  const laptop = {
    initial: { y: 0, scale: 4 },
    animate: {
      y: 20,
      scale: 1,
      rotate: -30,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <Container className="h-screen pt-16 grid lg:grid-cols-2 place-content-center overflow-hidden">
      <motion.div variants={intro} animate="visible" initial="hidden">
        <motion.h1
          variants={introChildren}
          className="text-5xl lg:text-8xl font-bold text-nowrap"
        >
          <span className="text-gray">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </motion.h1>
        <motion.p
          variants={introChildren}
          className="mt-10 mb-5 text-dark-gray text-lg max-w-[50ch]"
        >
          Welcome to
          <span className="text-primary-foreground font-semibold">iRepair</span>
          , your one-stop place for all kinds of
          <span className="text-primary-foreground  font-semibold">
            Mackbook repairs
          </span>
          and diagnostics
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={laptop}
        initial="initial"
        animate="animate"
        className="mt-10 mx-auto w-full "
      >
        <img
          className=" rounded-md mx-auto h-[90%] object-contain"
          src="https://5.imimg.com/data5/SELLER/Default/2023/6/316317115/VU/LP/UY/181126883/macbook-repair-services.jpg"
          alt=""
        />
      </motion.div>
    </Container>
  );
};

export default HeroSection;
