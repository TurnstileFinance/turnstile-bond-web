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
