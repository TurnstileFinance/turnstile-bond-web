import { BigNumberish, ethers } from 'ethers';

export enum NFTCARD_STATUS {
  NotStarted,
  Active,
  Canceled,
  Withdrawn,
}

export interface NftCard {
  tokenId: BigNumberish;
  accrued: BigNumberish;
  info: {
    status: NFTCARD_STATUS;
    seller: BigNumberish;
    softCap: BigNumberish;
    hardCap: BigNumberish;
    premium: BigNumberish;
    raised: BigNumberish;
    received: BigNumberish;
    accrued: BigNumberish;
  };
}

export interface ClaimableNftCard {
  amount: BigNumberish;
  tokenId: BigNumberish;
  bondStatus: {
    accrued: BigNumberish;
    tokenId: BigNumberish;
    info: {
      accrued: BigNumberish;
      hardCap: BigNumberish;
      premium: BigNumberish;
      raised: BigNumberish;
      received: BigNumberish;
      seller: BigNumberish;
      softCap: BigNumberish;
      status: NFTCARD_STATUS;
    };
  };
}

export interface BondStartDto {
  library: ethers.providers.Web3Provider;
  data: {
    nftId: string;
    minGoal: string;
    maxGoal: string;
    premium: string;
  };
}

export interface BondCancelDto {
  library: ethers.providers.Web3Provider;
  data: {
    nftId: string;
    amount: string;
  };
}

export interface BondFundDto {
  library: ethers.providers.Web3Provider;
  data: {
    nftId: string;
    amount: string;
  };
}

export interface ClaimFundDto {
  library: ethers.providers.Web3Provider;
  data: {
    nftId: string;
  };
}

export interface ApproveDto {
  library: ethers.providers.Web3Provider;
  data: {
    tokenId: string;
  };
}
