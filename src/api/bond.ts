import { BigNumber, Contract } from 'ethers';
import { TURNSTILE_BOND_ABI } from 'src/abi/turnstileBond';
import { toastError } from 'src/components/Toast';
import { TURNSTILE_BOND } from 'src/constants/address';
import { BondCancelDto, BondStartDto } from 'src/type';

export const startBond = async (bondStartDto: BondStartDto) => {
  const {
    library,
    data: { nftId, minGoal, maxGoal, premium },
  } = bondStartDto;
  const signer = library.getSigner();
  const contract = new Contract(TURNSTILE_BOND, TURNSTILE_BOND_ABI, signer);
  const gasUnits = await contract.estimateGas
    .start(nftId, minGoal, maxGoal, premium)
    .catch((e) => {
      toastError(JSON.parse(JSON.stringify(e))?.reason || 'error estimateGas');
    });
  if (!gasUnits) {
    return;
  }
  return contract.start(nftId, minGoal, maxGoal, premium, {
    gasLimit: BigNumber.from(gasUnits._hex).toNumber(),
  });
};

export const cancelBond = async (bondCancelDto: BondCancelDto) => {
  const {
    library,
    data: { nftId },
  } = bondCancelDto;
  const signer = library.getSigner();
  const contract = new Contract(TURNSTILE_BOND, TURNSTILE_BOND_ABI, signer);
  const gasUnits = await contract.estimateGas.cancel(nftId).catch((e) => {
    toastError(JSON.parse(JSON.stringify(e))?.reason || 'error estimateGas');
  });
  if (!gasUnits) {
    return;
  }
  return contract.cancel(nftId, {
    gasLimit: BigNumber.from(gasUnits._hex).toNumber(),
  });
};
