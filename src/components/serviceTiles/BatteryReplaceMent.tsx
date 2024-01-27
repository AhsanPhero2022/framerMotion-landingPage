import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const BatteryReplaceMent = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const xValues = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  return (
    <motion.div
      style={{
        scale: scaleValues,
        opacity: opacityValues,
        x: xValues,
      }}
      ref={componentRef}
      className="rounded-md p-4 col-span-12 bg-green-300 h-[300px]"
    >
      <h2>this is battery replacement</h2>
    </motion.div>
  );
};

export default BatteryReplaceMent;
