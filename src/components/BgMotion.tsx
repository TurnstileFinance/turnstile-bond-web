import { motion } from 'framer-motion';
import React from 'react';

export const BgMotion = () => {
  return (
    <div className="fixed inset-x-0 top-1/2 left-1/2 -z-10 h-full w-full -translate-y-1/2 -translate-x-1/2">
      <motion.img
        src="/assets/img/main-bg.png"
        animate={{
          x: [-0, 100, 0],
          scale: [0.2, 1.5, 0.2],
          transition: { duration: 20, repeat: Infinity },
        }}
        className="mx-auto md:w-full xl:w-2/3"
      />
    </div>
  );
};

export default BgMotion;
