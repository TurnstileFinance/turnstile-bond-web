import { BigNumber, Contract, ethers } from 'ethers';
import { TURNSTILE_ABI } from 'src/abi/turnstile';
import { toastError } from 'src/components/Toast';
import { TURNSTILE, TURNSTILE_BOND } from 'src/constants/address';
import { ApproveDto } from 'src/type';

export const setApprovalForAll = async (
  library: ethers.providers.Web3Provider
) => {
  const signer = library.getSigner();
  const contract = new Contract(TURNSTILE, TURNSTILE_ABI, signer);
  const gasUnits = await contract.estimateGas
    .setApprovalForAll(TURNSTILE, true)
    .catch((e) => {
      toastError(JSON.parse(JSON.stringify(e))?.reason || 'error estimateGas');
    });
  if (!gasUnits) {
    toastError('error estimateGas');
    return;
  }
  return contract.setApprovalForAll(TURNSTILE_BOND, true, {
    gasLimit: BigNumber.from(gasUnits._hex).toNumber(),
  });
};

export const approve = async (approveDto: ApproveDto) => {
  const {
    library,
    data: { tokenId },
  } = approveDto;
  const signer = library.getSigner();
  const contract = new Contract(TURNSTILE, TURNSTILE_ABI, signer);
  const gasUnits = await contract.estimateGas
    .approve(TURNSTILE, tokenId)
    .catch((e) => {
      toastError(JSON.parse(JSON.stringify(e))?.reason || 'error estimateGas');
    });
  if (!gasUnits) {
    toastError('error estimateGas');
    return;
  }
  return contract.approve(TURNSTILE_BOND, tokenId, {
    gasLimit: BigNumber.from(gasUnits._hex).toNumber(),
  });
};
