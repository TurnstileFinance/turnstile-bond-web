import { BigNumber, ethers } from 'ethers';
import { motion } from 'framer-motion';
import { chain, map } from 'lodash';
import React, { useState } from 'react';
import BgMotion from 'src/components/BgMotion';
import Button, { ButtonVariant } from 'src/components/Button';
import { RowTextContents } from 'src/components/card/RowTextContents';
import { RowTextHead } from 'src/components/card/RowTextHead';
import { FundModal } from 'src/components/modal/FundModal';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';
import ClaimableBondRow from 'src/components/table/ClaimableBondRow';
import {
  useCantoBalance,
  useCurrentBondStatus,
  useGetClaimableBond,
} from 'src/hooks/bondHooks';

const CURRENT_BOND_HEADERS = [
  {
    contents: 'Bond ID',
    description: 'NFT id',
  },
  {
    contents: 'Softcap',
    description: 'canto',
  },
  {
    contents: 'Hardcap',
    description: 'canto',
  },
  {
    contents: 'Funding Status',
    description: '% to Softcap',
  },
  {
    contents: 'Premium',
    description: '%',
  },
];

export const CLOSED_BOND_HEADERS = [
  {
    contents: 'Bond ID',
    description: 'NFT id',
  },
  {
    contents: 'Bond Value + Prem.',
    description: 'canto',
  },
  {
    contents: 'Accured Reserve',
    description: '% to Total',
  },
  {
    contents: 'Your Share',
    description: '%',
  },
  {
    contents: 'Claimable Amount',
    description: 'canto',
  },
];

export const LendPage = () => {
  const [fundOpen, setFundOpen] = useState<boolean>(false);
  const [selectedNftId, setSelectedNftId] = useState<string>('');
  const { data: balance } = useCantoBalance();
  const { data: fundableNfts } = useCurrentBondStatus();
  const { data: claimableNtfs } = useGetClaimableBond();
  return (
    <>
      <FundModal
        isOpen={fundOpen}
        onClose={() => setFundOpen(false)}
        nftId={selectedNftId}
      />
      <GNB />
      <motion.div
        layout
        className="mx-auto flex h-full w-full max-w-screen-lg flex-1 flex-col space-y-10 px-4 py-10"
      >
        <MainTabs />
        <BgMotion />

        <div className="pt-10">
          <div className="mb-5 flex items-end justify-between">
            <h3>Fundable Bonds</h3>
            <div>
              <p className="prh-1 text-gray-500">Your Balance</p>
              <div className="flex items-end space-x-1 text-brand-1">
                <h3>
                  {balance &&
                    parseFloat(ethers.utils.formatEther(balance)).toFixed(6)}
                </h3>
                <h5 className="">CANTO</h5>
              </div>
            </div>
          </div>
          <RowTextHead>
            {CURRENT_BOND_HEADERS.map((header) => (
              <RowTextHead.Text
                key={header.contents}
                contents={header.contents}
                description={header.description}
              />
            ))}
          </RowTextHead>

          <div className="mt-3 divide-y divide-zinc-800 overflow-hidden rounded-md border border-zinc-800">
            {fundableNfts?.length === 0 ? (
              <div className="grid w-full place-content-center bg-black/60 px-10 py-5 text-zinc-500">
                No current
              </div>
            ) : (
              chain(fundableNfts)
                .filter((nft) => {
                  const { info } = nft;
                  const raised = BigNumber.from(info.raised);
                  const hardCap = BigNumber.from(info.hardCap);
                  return BigNumber.from(hardCap).gt(raised);
                })
                .map((nft, index) => {
                  const row = index;
                  const { info } = nft;
                  const tokenId = BigNumber.from(nft.tokenId).toString();
                  const raised = BigNumber.from(info.raised);
                  const softCap = BigNumber.from(info.softCap);
                  const hardCap = BigNumber.from(info.hardCap);
                  const premium = BigNumber.from(info.premium).mul(100);
                  return (
                    <RowTextContents key={tokenId}>
                      {[
                        tokenId,
                        ethers.utils.formatEther(softCap.toString()),
                        ethers.utils.formatEther(hardCap.toString()),
                        `${raised.mul(100).div(softCap).toString()}%`,
                        `${ethers.utils.formatEther(premium.toString())}%`,
                      ].map((value, index) => {
                        const col = index;
                        return (
                          <RowTextContents.Text
                            key={[row, col].join('-')}
                            contents={value}
                            className={value === tokenId ? 'text-zinc-400' : ''}
                          />
                        );
                      })}
                      <Button
                        text="Fund"
                        variant={ButtonVariant.OUTLINE}
                        className="flex-1 px-0"
                        onClick={() => {
                          setFundOpen(true);
                          setSelectedNftId(tokenId);
                        }}
                      />
                    </RowTextContents>
                  );
                })
                .value()
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-5">Claimable Bonds</h3>
          <RowTextHead>
            {CLOSED_BOND_HEADERS.map((header) => (
              <RowTextHead.Text
                key={header.contents}
                contents={header.contents}
                description={header.description}
              />
            ))}
          </RowTextHead>

          <div className="mt-3 divide-y divide-zinc-800 overflow-hidden rounded-md border border-zinc-800">
            {claimableNtfs?.length === 0 ? (
              <div className="grid w-full place-content-center bg-black/60 px-10 py-5 text-zinc-500">
                No current
              </div>
            ) : (
              map(claimableNtfs, (claimableNft, index) => {
                return <ClaimableBondRow nftCard={claimableNft} key={index} />;
              })
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LendPage;
