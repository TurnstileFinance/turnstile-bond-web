import { ethers } from 'ethers';

export enum NFTCARD_STATUS {
  NotStarted,
  Active,
  Canceled,
  Withdrawn,
}

export interface NftCard {
  tokenId: string;
  accrued: string;
  info: {
    status: NFTCARD_STATUS;
    seller: string;
    softCap: string;
    hardCap: string;
    premium: string;
    raised: string;
    received: string;
    accrued: string;
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
  };
}
