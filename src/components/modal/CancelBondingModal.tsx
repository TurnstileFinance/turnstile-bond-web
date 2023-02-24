import { useWeb3React } from '@web3-react/core';
import { useCancelBond } from 'src/hooks/bondHooks';

import Button, { ButtonVariant } from '../Button';
import { Icon } from '../Icon';
import { toastError } from '../Toast';
import { AnimationLayout } from './AnimationLayout';

interface CancelBondingModalProps {
  isOpen: boolean;
  onClose: () => void;
  nftId: string | undefined;
}

export const CancelBondingModal = ({
  isOpen,
  onClose,
  nftId,
}: CancelBondingModalProps) => {
  const { library } = useWeb3React();
  const { mutate: cancelBond } = useCancelBond(onClose);
  return (
    <AnimationLayout open={isOpen} onClose={onClose}>
      <div className="my-8 w-full max-w-md transform space-y-16 overflow-hidden rounded-lg bg-[#0F0F0F] p-7 text-left shadow-xl transition-all">
        <div className="relative flex items-center justify-end">
          <Icon.X onClick={onClose} className="cursor-pointer" />
        </div>
        <div className="space-y-5 text-center">
          <p className="text-20 font-bold text-white">
            Do you really want to cancel Bonding <br />
            CSR NFT {nftId}?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <Button
            text="No"
            className="w-full border-none bg-[#27272A] text-zinc-400"
          />
          <Button
            onClick={() => {
              if (!nftId) {
                toastError('NFT ID is not defined');
                return;
              }
              cancelBond({
                library,
                data: {
                  nftId,
                },
              });
            }}
            text="Yes"
            variant={ButtonVariant.OUTLINE}
            className="w-full disabled:border-none disabled:bg-[#27272A] disabled:text-zinc-400"
          />
        </div>
      </div>
    </AnimationLayout>
  );
};
