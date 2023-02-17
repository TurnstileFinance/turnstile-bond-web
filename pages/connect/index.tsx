import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BgMotion from 'src/components/BgMotion';
import { useWeb3 } from 'src/hook/web3';

const contents = ['Find your wallet', 'Connecting', 'Connect your wallet !!'];

export const ConnectPage = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const { push } = useRouter();
  const { connect } = useWeb3();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIdx(1);
      connect().then(() => {
        setCurrentIdx(2);
        setTimeout(() => {
          push('/dashboard');
        }, 6000);
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <BgMotion />
      <div className="relative grid h-full flex-1 place-content-center">
        <div className="flex flex-col">
          <motion.h1
            layout
            className="text-brand-1 shadow-brand-1 drop-shadow-lg"
          >
            {contents[currentIdx]}
            {` `}
            {currentIdx < 2 && (
              <>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  .
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0.3,
                  }}
                >
                  .
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0.6,
                  }}
                >
                  .
                </motion.span>
              </>
            )}
          </motion.h1>
          <motion.div
            layout
            className="absolute inset-x-0 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 pt-20"
            initial={{ width: 0 }}
            animate={{ width: '80vw' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: 0.5,
              ease: 'easeInOut',
            }}
          >
            <motion.div className="h-0.5 bg-gradient-to-r from-brand-black via-brand-1 to-brand-black" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ConnectPage;
