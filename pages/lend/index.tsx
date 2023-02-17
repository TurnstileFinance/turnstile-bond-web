import { motion } from 'framer-motion';
import BGSVG from 'public/assets/svg/main-bg.svg';
import React from 'react';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';

export const index = () => {
  return (
    <>
      <GNB />
      <motion.div
        layout
        className="mx-auto flex h-full w-full max-w-screen-lg flex-1 flex-col px-4 py-10"
      >
        <BGSVG className="fixed inset-x-0 top-1/2 -z-10 mx-auto -translate-y-1/2 opacity-25 md:w-full xl:w-2/3" />
        <MainTabs />
      </motion.div>
    </>
  );
};

export default index;
