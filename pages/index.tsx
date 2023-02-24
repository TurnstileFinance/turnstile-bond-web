import { useWeb3React } from '@web3-react/core';
import { motion } from 'framer-motion';
import { map } from 'lodash';
import { useRouter } from 'next/router';
import BgMotion from 'src/components/BgMotion';
import Button, { ButtonVariant } from 'src/components/Button';
import { NFTCard } from 'src/components/card/NFTCard';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';
import { useSellerBondStatus } from 'src/hooks/bondHooks';

export default function HomePage() {
  const { push } = useRouter();
  const { account } = useWeb3React();
  const { data: nfts } = useSellerBondStatus();
  return (
    <>
      <GNB />

      <motion.div layout className="flex h-full flex-1 flex-col px-4 py-10">
        <BgMotion />
        <MainTabs />

        {account ? (
          <div className="mx-auto mt-20 grid w-full max-w-screen-lg grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {map(nfts, (nft) => (
              <NFTCard nft={nft} key={nft.tokenId} />
            ))}
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
            <Button
              text="CONNECT  >"
              className="h2 px-10 tracking-[0.2em]"
              onClick={() => push('/connect')}
              variant={ButtonVariant.OUTLINE}
            />
          </div>
        )}
      </motion.div>
    </>
  );
}
