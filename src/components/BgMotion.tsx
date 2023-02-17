import { motion } from 'framer-motion';
import React from 'react';

export const BgMotion = () => {
  return (
    <div className="fixed inset-x-0 top-1/2 left-1/2 -z-10 h-full w-full -translate-y-1/2 -translate-x-1/2">
      <motion.video
        muted
        loop
        autoPlay
        src="/assets/video/bg.mp4"
        className="w-full translate-x-[200px] scale-150 opacity-50"
        initial={{
          scale: 1.5,
        }}
        animate={{
          y: [0, -100, 0, 100, 0],
          scale: 1.5,
          transition: { duration: 20, repeat: Infinity },
        }}
      />
    </div>
  );
};

export default BgMotion;
