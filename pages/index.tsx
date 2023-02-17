import { useWeb3React } from '@web3-react/core';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import BgMotion from 'src/components/BgMotion';
import Button, { ButtonVariant } from 'src/components/Button';
import { NFTCard } from 'src/components/card/NFTCard';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';
import { NFT_DUMMY } from 'src/dummies';

export default function HomePage() {
  const { push } = useRouter();
  const { account } = useWeb3React();
  return (
    <>
      <GNB hasCard={false} />

      <motion.div layout className="flex h-full flex-1 flex-col px-4 py-10">
        <BgMotion />
        <MainTabs />

        {account ? (
          <div className="mx-auto mt-10 grid w-full max-w-screen-lg grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {NFT_DUMMY.map((nft) => (
              <NFTCard items={nft} key={nft.id} />
            ))}
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
