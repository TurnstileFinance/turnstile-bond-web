import { useQuery } from '@tanstack/react-query';
import { useWeb3React } from '@web3-react/core';
import { BigNumber } from 'ethers';
import { TURNSTILE_BOND_ABI } from 'src/abi/turnstileBond';
import { fetcher } from 'src/api';
import { TURNSTILE_BOND } from 'src/constants/address';
import { NftCard } from 'src/type';

export const useSellerBondStatus = () => {
  const { account, active, library } = useWeb3React();
  return useQuery<Array<NftCard>>(
    [TURNSTILE_BOND, 'sellerBondStatus', account],
    fetcher(library, TURNSTILE_BOND_ABI),
    {
      enabled: active && !!account,
    }
  );
};

export const useCurrentBondStatus = () => {
  const { account, active, library } = useWeb3React();
  return useQuery<Array<NftCard>>(
    [TURNSTILE_BOND, 'currentBondStatus'],
    fetcher(library, TURNSTILE_BOND_ABI),
    {
      enabled: active && !!account,
    }
  );
};

export const useGetClaimableBond = () => {
  const { account, active, library } = useWeb3React();
  return useQuery<Array<NftCard>>(
    [TURNSTILE_BOND, 'getClaimableBond', account],
    fetcher(library, TURNSTILE_BOND_ABI),
    {
      enabled: active && !!account,
    }
  );
};

export const useCantoBalance = () => {
  const { account, active, library } = useWeb3React();
  return useQuery<BigNumber>(
    ['cantoBalance', account],
    () => library.getBalance(account),
    {
      enabled: active && !!account,
    }
  );
};
