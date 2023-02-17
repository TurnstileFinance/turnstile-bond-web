import { useWeb3React } from '@web3-react/core';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Button, { ButtonVariant } from 'src/components/Button';
import { NFTCard } from 'src/components/card/NFTCard';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';

export default function HomePage() {
  const { push } = useRouter();
  const { account } = useWeb3React();
  return (
    <>
      <GNB hasCard={false} />
      <motion.div layout className="flex h-full flex-1 flex-col px-4 py-10">
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
        <MainTabs />

        {account ? (
          <div className="mx-auto mt-10 grid w-full max-w-screen-lg grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
            <Button
              text="CONNECT  >"
              className="h2 px-10 tracking-[0.2em] "
              onClick={() => push('/connect')}
              variant={ButtonVariant.OUTLINE}
            />
          </div>
        )}
      </motion.div>
    </>
  );
}
