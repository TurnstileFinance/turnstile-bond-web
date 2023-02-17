import { FC } from 'react';

import Button, { ButtonVariant } from '../Button';
import CountingUnitTextField from '../CountingUnitTextField';
import { Icon } from '../Icon';
import { AnimationLayout } from './AnimationLayout';

interface FundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FundModal: FC<FundModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return <></>;
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
            <p className="prh-3">12,000 CANTO</p>
          </div>
          <div className="flex justify-between space-x-5">
            <p className="prh-1 pt-2.5">Fund Qty</p>
            <div className="flex-1">
              <CountingUnitTextField
                countingUnit="CANTO"
                // 내 가진 돈보다 더 입력하면 아래 메시지와 함께 disabled처리
                // helper="*Your Balance quantity is not enough"
              />
            </div>
          </div>
        </div>
        <Button
          text="Fund"
          variant={ButtonVariant.SOLID}
          className="w-full disabled:border-none disabled:bg-[#27272A] disabled:text-zinc-400"
          // CountingUnitTextField에 숫자가 없을 경우 disabled처리.
          // disabled
        />
      </div>
    </AnimationLayout>
  );
};
