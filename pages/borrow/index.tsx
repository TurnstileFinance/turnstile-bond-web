import { useWeb3React } from '@web3-react/core';
import { motion } from 'framer-motion';
import { filter, map } from 'lodash';
import { useState } from 'react';
import BgMotion from 'src/components/BgMotion';
import BorrowNFTCard from 'src/components/card/BorrowNFTCard';
import { NFTCard } from 'src/components/card/NFTCard';
import { BorrowFundModal } from 'src/components/modal/BorrowFundModal';
import { CancelBondingModal } from 'src/components/modal/CancelBondingModal';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';
import { useSellerBondStatus } from 'src/hooks/bondHooks';
import { useApprove, useIsApproveForAll } from 'src/hooks/turnstileHooks';
import { NftCard, NFTCARD_STATUS } from 'src/type';

export default function BorrowPage() {
  const [selectNftId, setSelectNftId] = useState<string>();
  const [selectNftReceived, setSelectNftReceived] = useState<string>('0');
  const [openBorrowFundModal, setOpenBorrowFundModal] = useState(false);
  const [openCancelBondingModal, setOpenCancelBondingModal] = useState(false);
  const { account, library } = useWeb3React();
  const { data: nfts } = useSellerBondStatus();
  const { data: approveForAll } = useIsApproveForAll();
  const bodingNfts = filter(
    nfts,
    (nft) =>
      nft.info.status !== NFTCARD_STATUS.NotStarted &&
      nft.info.status !== NFTCARD_STATUS.Canceled
  );
  const bondableNfts = filter(
    nfts,
    (nft) => nft.info.status === NFTCARD_STATUS.NotStarted
  );
  const { mutate: approve } = useApprove();

  const onClickCancleBorrowCard = (isApprove: boolean, nft: NftCard) => {
    if (nft.info.raised > nft.info.softCap) return;
    if (isApprove) {
      setOpenCancelBondingModal(true);
      setSelectNftId(nft.tokenId.toString());
      setSelectNftReceived(nft.info.received.toString());
    } else {
      approve({
        library,
        data: {
          tokenId: nft.tokenId.toString(),
        },
      });
    }
  };

  const onClickBorrowCard = (isApprove: boolean, nft: NftCard) => {
    if (isApprove) {
      setOpenBorrowFundModal(true);
      setSelectNftId(nft.tokenId.toString());
    } else {
      approve({
        library,
        data: {
          tokenId: nft.tokenId.toString(),
        },
      });
    }
  };

  return (
    <>
      <CancelBondingModal
        isOpen={openCancelBondingModal}
        onClose={() => setOpenCancelBondingModal(false)}
        nftId={selectNftId}
        received={selectNftReceived}
      />
      <BorrowFundModal
        isOpen={openBorrowFundModal}
        onClose={() => setOpenBorrowFundModal(false)}
        nftId={selectNftId}
      />
      <GNB />
      <motion.div
        layout
        className="mx-auto flex h-full w-full max-w-screen-lg flex-1 flex-col px-4 py-10"
      >
        <BgMotion />
        <MainTabs />

        {account && (
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
                      <NFTCard
                        nft={nft}
                        key={nft.tokenId.toString()}
                        buttonText={
                          nft.info.raised > nft.info.softCap
                            ? 'Ongoing Bond 🔥'
                            : 'Cancel Bonding 🔥'
                        }
                        onClick={() => onClickCancleBorrowCard(true, nft)}
                        isCancel={nft.info.raised > nft.info.softCap}
                        text="Redeemable Canto"
                      />
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
                      <BorrowNFTCard
                        key={nft.tokenId.toString()}
                        nft={nft}
                        onClick={(isApproved: boolean) =>
                          onClickBorrowCard(isApproved, nft)
                        }
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
