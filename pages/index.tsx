import { useWeb3React } from '@web3-react/core';
import { motion } from 'framer-motion';
import { filter, map } from 'lodash';
import { useRouter } from 'next/router';
import BgMotion from 'src/components/BgMotion';
import Button, { ButtonVariant } from 'src/components/Button';
import { NFTCard } from 'src/components/card/NFTCard';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';
import { useSellerBondStatus } from 'src/hooks/bondHooks';
import { NFTCARD_STATUS } from 'src/type';

export default function HomePage() {
  const { push } = useRouter();
  const { account } = useWeb3React();
  const { data: nfts } = useSellerBondStatus();
  const bodingNfts = filter(
    nfts,
    (nft) => nft.info.status !== NFTCARD_STATUS.NotStarted
  );
  const bondableNfts = filter(
    nfts,
    (nft) => nft.info.status === NFTCARD_STATUS.NotStarted
  );
  return (
    <>
      <GNB />

      <motion.div
        layout
        className="mx-auto flex h-full w-full max-w-screen-lg flex-1 flex-col px-4 py-10"
      >
        <BgMotion />
        <MainTabs />

        {account ? (
          <>
            <div className="mt-20 flex w-full flex-col items-center justify-center space-y-10">
              <div className="flex w-full flex-col justify-center space-y-6">
                <span className="text-24 font-bold text-white">
                  Bonding NFTs ({bodingNfts.length})
                </span>
                {bodingNfts.length === 0 ? (
                  <h1 className="text-brand-1 shadow-brand-1 drop-shadow-lg">
                    You do not have any Bonding CSR NFT...
                  </h1>
                ) : (
                  <div className="grid w-full max-w-screen-lg grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
                    {map(bodingNfts, (nft) => (
                      <NFTCard nft={nft} key={nft.tokenId.toString()} />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex w-full flex-col justify-center space-y-6">
                <span className="text-24 font-bold text-white">
                  Bondable NFTs ({bondableNfts.length})
                </span>
                {bondableNfts.length === 0 ? (
                  <h1 className="text-brand-1 shadow-brand-1 drop-shadow-lg">
                    You do not have any Bondable CSR NFT...
                  </h1>
                ) : (
                  <div className="grid w-full max-w-screen-lg grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
                    {map(bondableNfts, (nft) => (
                      <NFTCard nft={nft} key={nft.tokenId.toString()} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
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
