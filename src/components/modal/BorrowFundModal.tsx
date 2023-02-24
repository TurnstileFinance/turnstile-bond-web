import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { FC, useEffect, useState } from 'react';
import { useBondStart } from 'src/hooks/bondHooks';

import Button, { ButtonVariant } from '../Button';
import CountingUnitTextField from '../CountingUnitTextField';
import { Icon } from '../Icon';
import { toastError } from '../Toast';
import { AnimationLayout } from './AnimationLayout';

interface BorrowFundModalProps {
  nftId: string | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const BorrowFundModal: FC<BorrowFundModalProps> = ({
  nftId,
  isOpen,
  onClose,
}) => {
  const { library } = useWeb3React();
  const [minGoal, setMinGoal] = useState<string>('');

  const minGoalBigNumber = ethers.utils.parseUnits(
    minGoal.replaceAll?.(',', '') || '0',
    18
  );
  const [maxGoal, setMaxGoal] = useState<string>('');
  const maxGoalBigNumber = ethers.utils.parseUnits(
    maxGoal.replaceAll?.(',', '') || '0',
    18
  );
  const [premium, setPremium] = useState<string>('');

  const { mutate: startBond } = useBondStart(onClose);

  useEffect(() => {
    if (isOpen) {
      setMinGoal('');
      setMaxGoal('');
      setPremium('');
    }
  }, [isOpen]);

  return (
    <AnimationLayout open={isOpen} onClose={onClose}>
      <div className="my-8 w-full max-w-md transform space-y-16 overflow-hidden rounded-lg bg-brand-black p-6 text-left shadow-xl transition-all">
        <div className="relative flex items-center justify-end">
          <h4 className="absolute left-1/2 -translate-x-1/2 font-semibold uppercase">
            Funding Details
          </h4>
          <Icon.X onClick={onClose} className="cursor-pointer" />
        </div>
        <div className="space-y-5">
          <div className="flex justify-between space-x-5">
            <p className="prh-1 pt-2.5">miniGoal</p>
            <div className="flex-1">
              <CountingUnitTextField
                countingUnit="CANTO"
                value={minGoal}
                onChange={(e) => {
                  setMinGoal(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-between space-x-5">
            <p className="prh-1 pt-2.5">maxGoal</p>
            <div className="flex-1">
              <CountingUnitTextField
                countingUnit="CANTO"
                value={maxGoal}
                onChange={(e) => {
                  setMaxGoal(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-between space-x-5">
            <p className="prh-1 pt-2.5">Premium</p>
            <div className="flex-1">
              <CountingUnitTextField
                countingUnit="%"
                value={premium}
                onChange={(e) => {
                  setPremium(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <Button
          text="Fund"
          variant={ButtonVariant.SOLID}
          className="w-full disabled:border-none disabled:bg-[#27272A] disabled:text-zinc-400"
          onClick={() => {
            if (!nftId) {
              toastError('NFT ID is not found.');
              return;
            }
            startBond({
              library,
              data: {
                nftId,
                minGoal: minGoalBigNumber.toString(),
                maxGoal: maxGoalBigNumber.toString(),
                premium: ethers.utils
                  .parseUnits(premium.replaceAll(',', '') || '0', 18)
                  .div(100)
                  .toString(),
              },
            });
          }}
          disabled={
            !minGoal ||
            !maxGoal ||
            !premium ||
            minGoalBigNumber.gt(maxGoalBigNumber)
          }
        />
      </div>
    </AnimationLayout>
  );
};
