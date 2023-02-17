import { motion } from 'framer-motion';
import Black_CircleSVG from 'public/assets/svg/half-circle-black.svg';
import React, { FC } from 'react';

import Button, { ButtonVariant } from '../Button';

interface NFTCardProps {}

export const NFTCard: FC<NFTCardProps> = ({}) => {
  return (
    <motion.div
      layout
      className="relative overflow-hidden rounded-lg p-[0.08rem]"
    >
      <div className="group flex flex-col justify-between space-y-5 rounded-lg bg-black px-4 py-6 text-center text-gray-400 transition-all hover:text-brand-1">
        <div>
          <h3>CSR NFT 1</h3>

          {/* border 역할하는 곳. */}
          <div className="absolute  top-1/2 left-1/2 -z-10 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-[#E5E5E5]/70 via-[#181818] to-[#E5E5E5]/70 transition-all group-hover:from-brand-1 group-hover:via-brand-1/5 group-hover:to-brand-1" />
        </div>

        <div className="space-y-5">
          <div className="mx-auto flex h-24 w-full items-end justify-center overflow-hidden">
            <Black_CircleSVG className="bl tran z-1 0 rounded-t-full shadow-[0_0_40px_13px_rgba(82,82,82,0.74)] transition-all group-hover:shadow-[0_0_40px_13px_rgba(191,255,165,0.74)]" />
          </div>
          <div className="space-y-0.5">
            <p className="prh-4">accrued Canto balance</p>
            <h3>{(5700).toLocaleString()}</h3>
          </div>
        </div>

        <Button
          text="Start Funding →"
          variant={ButtonVariant.OUTLINE}
          className="prh-3 group-hover:bg-brand-1 group-hover:text-brand-black group-hover:shadow-[0_0_50px_rgba(188,255,160,0.5)]"
        />
      </div>
    </motion.div>
  );
};
