import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image';

const LoadingDot = {
  display: "block",
 
  
  borderRadius: "50%"
};

const LoadingContainer = {
 
  display: "flex",
  justifyContent: "space-around"
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2
    }
  },
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const DotVariants = {
  initial: {
    y: "50%"
  },
  animate: {
    y: "100%"
  }
};

const DotTransition = {
  duration: 7,
  yoyo: Infinity,
  ease: "easeInOut"
};

export default function Langanimate({next, width, height}) {
  return (
    <div>
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        ><Image src={next} height={height}
    width={width} className="bg-cover" /></motion.span>
        
      </motion.div>
    </div>
  );
}
