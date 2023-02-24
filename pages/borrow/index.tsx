import { useWeb3React } from '@web3-react/core';
import { motion } from 'framer-motion';
import { filter, map } from 'lodash';
import { useState } from 'react';
import BgMotion from 'src/components/BgMotion';
import { NFTCard } from 'src/components/card/NFTCard';
import { BorrowFundModal } from 'src/components/modal/BorrowFundModal';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';
import { useSellerBondStatus } from 'src/hooks/bondHooks';
import {
  useIsApproveForAll,
  useSetApprovalForAll,
} from 'src/hooks/turnstileHooks';
import { NFTCARD_STATUS } from 'src/type';

export default function BorrowPage() {
  const [borrowNftId, setBorrowNftId] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const { account } = useWeb3React();
  const { data: nfts } = useSellerBondStatus();
  const { data: approveForAll } = useIsApproveForAll();
  const bodingNfts = filter(
    nfts,
    (nft) => nft.info.status !== NFTCARD_STATUS.NotStarted
  );
  const bondableNfts = filter(
    nfts,
    (nft) => nft.info.status === NFTCARD_STATUS.NotStarted
  );

  const { mutate: setApprovalForAll } = useSetApprovalForAll();

  return (
    <>
      <BorrowFundModal
        isOpen={open}
        onClose={() => setOpen(false)}
        nftId={borrowNftId}
      />
      <GNB />
      <motion.div layout className="flex h-full flex-1 flex-col px-4 py-10">
        <BgMotion />
        <MainTabs />

        {account && (
          <>
            <div className="mt-20 flex w-full flex-col items-center justify-center space-y-10 pl-40">
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
                      <NFTCard nft={nft} key={nft.tokenId} />
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
                      <NFTCard
                        nft={nft}
                        key={nft.tokenId}
                        buttonText={
                          approveForAll ? 'Start Bonding →' : 'Approve'
                        }
                        onClick={() => {
                          if (approveForAll) {
                            setOpen(true);
                            setBorrowNftId(nft.tokenId.toString());
                          } else {
                            setApprovalForAll();
                          }
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
}
