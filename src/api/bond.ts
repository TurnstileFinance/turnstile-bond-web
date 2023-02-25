import { BigNumber, Contract } from 'ethers';
import { TURNSTILE_BOND_ABI } from 'src/abi/turnstileBond';
import { toastError } from 'src/components/Toast';
import { TURNSTILE_BOND } from 'src/constants/address';
import {
  BondCancelDto,
  BondFundDto,
  BondStartDto,
  ClaimFundDto,
} from 'src/type';

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
    data: { nftId, amount },
  } = bondCancelDto;
  const signer = library.getSigner();
  const contract = new Contract(TURNSTILE_BOND, TURNSTILE_BOND_ABI, signer);
  const gasUnits = await contract.estimateGas
    .cancel(nftId, { value: amount })
    .catch((e) => {
      toastError(JSON.parse(JSON.stringify(e))?.reason || 'error estimateGas');
    });
  if (!gasUnits) {
    return;
  }
  return contract.cancel(nftId, {
    value: amount,
    gasLimit: BigNumber.from(gasUnits._hex).toNumber(),
  });
};

export const fundBond = async (bondFundDto: BondFundDto) => {
  const {
    library,
    data: { nftId, amount },
  } = bondFundDto;
  const signer = library.getSigner();
  const contract = new Contract(TURNSTILE_BOND, TURNSTILE_BOND_ABI, signer);
  const gasUnits = await contract.estimateGas
    .fund(nftId, {
      value: amount,
    })
    .catch((e) => {
      toastError(JSON.parse(JSON.stringify(e))?.reason || 'error estimateGas');
    });
  if (!gasUnits) {
    return;
  }
  return contract.fund(nftId, {
    value: amount,
    gasLimit: BigNumber.from(gasUnits._hex).toNumber(),
  });
};

export const claimBond = async (claimFundDto: ClaimFundDto) => {
  const {
    library,
    data: { nftId },
  } = claimFundDto;
  const signer = library.getSigner();
  const contract = new Contract(TURNSTILE_BOND, TURNSTILE_BOND_ABI, signer);
  const gasUnits = await contract.estimateGas.claim(nftId).catch((e) => {
    toastError(JSON.parse(JSON.stringify(e))?.reason || 'error estimateGas');
  });
  if (!gasUnits) {
    return;
  }
  return contract.claim(nftId, {
    gasLimit: BigNumber.from(gasUnits._hex).toNumber(),
  });
};
