import { BigNumber, ethers } from 'ethers';
import { useState } from 'react';
import { useBalanceOfToken } from 'src/hooks/bondHooks';
import { ClaimableNftCard } from 'src/type';

import Button, { ButtonVariant } from '../Button';
import { RowTextContents } from '../card/RowTextContents';
import { ClaimModal } from '../modal/ClaimModal';

interface ClaimableBondRowProps {
  nftCard: ClaimableNftCard;
}

const ClaimableBondRow = (props: ClaimableBondRowProps) => {
  const { nftCard } = props;
  const { data: tokenShare } = useBalanceOfToken(nftCard.tokenId.toString());
  const [claimMOpen, setClaimMOpen] = useState<boolean>(false);

  const {
    bondStatus,
    bondStatus: { info },
  } = nftCard;
  const divisor = BigNumber.from(10).pow(18);
  const amount = ethers.utils.formatEther(BigNumber.from(nftCard.amount));
  const accured = BigNumber.from(bondStatus.accrued);
  const raised = ethers.BigNumber.from(info.raised);
  const tokenId = BigNumber.from(nftCard.tokenId).toString();
  const premium = BigNumber.from(info.premium);
  const totalDebt = raised.add(raised.mul(premium).div(divisor));
  const accruedReserve = accured.div(totalDebt).mul(100).toString();
  const userShare = BigNumber.from(tokenShare || '0')
    .mul(100)
    .div(raised)
    .toString();
  return (
    <>
      <ClaimModal
        isOpen={claimMOpen}
        onClose={() => setClaimMOpen(false)}
        nftId={tokenId}
        amount={amount}
      />

      <RowTextContents>
        {[
          tokenId,
          ethers.utils.formatEther(totalDebt.toString()),
          parseFloat(ethers.utils.formatEther(accruedReserve)).toFixed(6),
          userShare,
          parseFloat(amount).toFixed(6),
        ].map((value, index) => (
          <RowTextContents.Text
            key={[tokenId, index].join('-')}
            contents={value}
            className={
              index === 0
                ? 'text-zinc-400'
                : index === 4
                ? 'truncate text-brand-1'
                : 'truncate'
            }
          />
        ))}
        <Button
          text="Claim"
          variant={ButtonVariant.OUTLINE}
          className="flex-1 px-0"
          onClick={() => setClaimMOpen(true)}
        />
      </RowTextContents>
    </>
  );
};

export default ClaimableBondRow;
