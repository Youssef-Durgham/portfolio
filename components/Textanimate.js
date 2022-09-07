import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image';

const LoadingDot = {
  display: "block",
 
  
  borderRadius: "50%"
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

export default function Textanimate() {
  return (
    <div className="mx-auto text-center z-50">
      


      <motion.div
        
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        >
            <div className=' text-[#140A44] mt-32 font-Josefin text-2xl t:text-4xl l:text-5xl ll:text-6xl 4k:text-7xl font-bold justify-center items-center'>LET`S BUILD
          <div>SOMETHING</div>
          <div>GREATE TOGETHER</div>
          </div>
        </motion.span>
        
      </motion.div>
    </div>
  );
}
