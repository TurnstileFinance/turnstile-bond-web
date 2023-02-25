import { useWeb3React } from '@web3-react/core';
import { BigNumber, ethers } from 'ethers';
import { FC, useState } from 'react';
import { useCantoBalance, useFundBond } from 'src/hooks/bondHooks';
import { NftCard } from 'src/type';

import Button, { ButtonVariant } from '../Button';
import CountingUnitTextField from '../CountingUnitTextField';
import { Icon } from '../Icon';
import { AnimationLayout } from './AnimationLayout';

interface FundModalProps {
  isOpen: boolean;
  onClose: () => void;
  nftId: string;
  nft?: NftCard;
}

export const FundModal: FC<FundModalProps> = ({
  isOpen,
  onClose,
  nftId,
  nft,
}) => {
  const { library } = useWeb3React();
  const [fundAmount, setFundAmount] = useState<string>('');
  const fundAmountInWei = ethers.utils.parseUnits(
    fundAmount.replaceAll?.(',', '') || '0',
    18
  );
  const { data: balance } = useCantoBalance();
  const { mutate: fundBond } = useFundBond(onClose);
  const maxAvailableInWei = BigNumber.from(nft?.info.hardCap || 0).sub(
    BigNumber.from(nft?.info.raised || 0)
  );
  return (
    <AnimationLayout open={isOpen} onClose={onClose}>
      <div className="my-8 w-full max-w-md transform space-y-16 overflow-hidden rounded-lg bg-brand-black p-6 text-left shadow-xl transition-all">
        <div className="relative flex items-center justify-end">
          <h4 className="absolute left-1/2 -translate-x-1/2 font-semibold">
            Fund
          </h4>
          <Icon.X onClick={onClose} className="cursor-pointer" />
        </div>
        <div className="space-y-5">
          <div className="ml-auto flex w-fit items-center space-x-2 rounded-full bg-white/10 px-5 py-1">
            <p className="prh-1 text-gray-500">Your Balance</p>
            <p className="prh-3">
              {balance &&
                parseFloat(ethers.utils.formatEther(balance)).toFixed(6)}
            </p>
          </div>
          <div className="flex justify-between space-x-5">
            <p className="prh-1 pt-2.5">Fund Qty</p>
            <div className="flex-1">
              <CountingUnitTextField
                countingUnit="CANTO"
                value={fundAmount}
                onChange={(e) => setFundAmount(e.target.value)}
                helper={
                  balance && fundAmountInWei.gt(balance)
                    ? '*Your Balance quantity is not enough'
                    : fundAmountInWei.gt(maxAvailableInWei)
                    ? `*Max available quantity is ${ethers.utils.formatEther(
                        maxAvailableInWei
                      )}`
                    : undefined
                }
              />
            </div>
          </div>
        </div>
        <Button
          onClick={() =>
            fundBond({
              library,
              data: {
                nftId: BigNumber.from(nftId).toHexString(),
                amount: fundAmountInWei.toHexString(),
              },
            })
          }
          text="Fund"
          variant={ButtonVariant.SOLID}
          className="w-full disabled:border-none disabled:bg-[#27272A] disabled:text-zinc-400"
          disabled={balance && fundAmountInWei.gt(balance) || fundAmountInWei.gt(maxAvailableInWei)}
        />
      </div>
    </AnimationLayout>
  );
};
