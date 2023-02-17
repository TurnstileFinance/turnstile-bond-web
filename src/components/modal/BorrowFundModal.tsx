import { useRouter } from 'next/router';
import { FC } from 'react';

import Button, { ButtonVariant } from '../Button';
import CountingUnitTextField from '../CountingUnitTextField';
import { Icon } from '../Icon';
import { toastSuccess } from '../Toast';
import { AnimationLayout } from './AnimationLayout';

interface BorrowFundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BorrowFundModal: FC<BorrowFundModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return <></>;
  const { push } = useRouter();
  return (
    <AnimationLayout open={isOpen} onClose={onClose}>
      <div className="my-8 w-full max-w-md transform space-y-16 overflow-hidden rounded-lg bg-brand-black p-6 text-left shadow-xl transition-all">
        <div className="relative flex items-center justify-end">
          <h4 className="absolute left-1/2 -translate-x-1/2 font-semibold">
            Funding Details
          </h4>
          <Icon.X onClick={onClose} className="cursor-pointer" />
        </div>
        <div className="space-y-5">
          <div className="flex justify-between space-x-5">
            <p className="prh-1 pt-2.5">miniGoal</p>
            <div className="flex-1">
              <CountingUnitTextField countingUnit="CANTO" />
            </div>
          </div>
          <div className="flex justify-between space-x-5">
            <p className="prh-1 pt-2.5">maxGoal</p>
            <div className="flex-1">
              <CountingUnitTextField countingUnit="CANTO" />
            </div>
          </div>
          <div className="flex justify-between space-x-5">
            <p className="prh-1 pt-2.5">Premium</p>
            <div className="flex-1">
              <CountingUnitTextField countingUnit="%" />
            </div>
          </div>
        </div>
        <Button
          text="Fund"
          variant={ButtonVariant.SOLID}
          className="w-full disabled:border-none disabled:bg-[#27272A] disabled:text-zinc-400"
          onClick={() => {
            push('/lend');
            toastSuccess('Funding has been successful.');
          }}

          // CountingUnitTextField에 숫자가 없을 경우 disabled처리.
          // disabled
        />
      </div>
    </AnimationLayout>
  );
};
