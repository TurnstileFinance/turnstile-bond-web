import { ethers } from 'ethers';
export const fetcher =
  (library: ethers.providers.Web3Provider | undefined, abi: any) =>
  ({ queryKey }: any) => {
    if (!library) return;
    const [address, method, ...params] = queryKey;
    const contract = new ethers.Contract(address, abi, library);
    return contract[method](...params);
  };
