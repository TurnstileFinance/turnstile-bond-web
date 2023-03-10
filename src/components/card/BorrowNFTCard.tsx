import { TURNSTILE_BOND } from 'src/constants/address';
import { useIsApprove } from 'src/hooks/turnstileHooks';
import { NftCard } from 'src/type';

import { NFTCard } from './NFTCard';

interface BorrowNFTCardProps {
  nft: NftCard;
  onClick: (isApproved: boolean) => void;
}

const BorrowNFTCard = ({ nft, onClick }: BorrowNFTCardProps) => {
  const { data } = useIsApprove(nft.tokenId.toString());
  const isApproved = data === TURNSTILE_BOND;

  return (
    <NFTCard
      nft={nft}
      key={nft.tokenId.toString()}
      buttonText={isApproved ? 'Start Bonding 🔥' : 'Approve'}
      onClick={() => onClick(isApproved)}
      text="Accrued Canto"
    />
  );
};

export default BorrowNFTCard;
