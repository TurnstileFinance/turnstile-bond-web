import { FC } from 'react';

import Button, { ButtonVariant } from '../Button';
import { Icon } from '../Icon';
import { AnimationLayout } from './AnimationLayout';

interface ClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimModal: FC<ClaimModalProps> = ({ isOpen, onClose }) => {
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
            <p className="text-[64px] font-extrabold">124</p>
            <p className="prh-1">Claimable Amount</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <Button
            text="Cancel"
            className="w-full border-none bg-[#27272A] text-zinc-400"
          />
          <Button
            text="Claim"
            variant={ButtonVariant.OUTLINE}
            className="w-full disabled:border-none disabled:bg-[#27272A] disabled:text-zinc-400"
          />
        </div>
      </div>
    </AnimationLayout>
  );
};
