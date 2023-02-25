import { useWeb3React } from '@web3-react/core';
import { FC } from 'react';
import { useClaimBond } from 'src/hooks/bondHooks';

import Button, { ButtonVariant } from '../Button';
import { Icon } from '../Icon';
import { AnimationLayout } from './AnimationLayout';

interface ClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
  nftId: string;
  amount: string;
}

export const ClaimModal: FC<ClaimModalProps> = ({
  isOpen,
  onClose,
  amount,
  nftId,
}) => {
  const { library } = useWeb3React();
  const { mutate: claimBond } = useClaimBond(onClose);
  return (
    <AnimationLayout open={isOpen} onClose={onClose}>
      <div className="my-8 w-full max-w-md transform space-y-16 overflow-hidden rounded-lg bg-brand-black p-6 text-left shadow-xl transition-all">
        <div className="relative flex items-center justify-end">
          <h4 className="absolute left-1/2 -translate-x-1/2 font-semibold">
            Claim
          </h4>
          <Icon.X onClick={onClose} className="cursor-pointer" />
        </div>
        <div className="space-y-5 text-center">
          <h4>Do you agree with the claim?</h4>
          <div className="text-brand-1">
            <p className="text-[64px] font-extrabold">{amount}</p>
            <p className="prh-1">Claimable Amount</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-x-5">
            <Button
              onClick={onClose}
              text="Cancel"
              className="w-full border-none bg-[#27272A] text-zinc-400"
            />
            <Button
              onClick={() =>
                claimBond({
                  library,
                  data: {
                    nftId,
                  },
                })
              }
              text="Claim"
              variant={ButtonVariant.OUTLINE}
              className="w-full disabled:border-none disabled:bg-[#27272A] disabled:text-zinc-400"
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-red-400">
              *Warning: If you claim your fund once, you can not claim it out
              again. Please check the amount of Canto and the funding premium
              you invested in and see if the amount you take to claim is
              correct.
            </p>
          </div>
        </div>
      </div>
    </AnimationLayout>
  );
};
