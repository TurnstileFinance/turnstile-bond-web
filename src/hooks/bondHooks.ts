import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useWeb3React } from '@web3-react/core';
import { BigNumber } from 'ethers';
import { toast } from 'react-toastify';
import { TURNSTILE_BOND_ABI } from 'src/abi/turnstileBond';
import { fetcher } from 'src/api';
import { startBond } from 'src/api/bond';
import { toastError, toastSuccess } from 'src/components/Toast';
import { TURNSTILE_BOND } from 'src/constants/address';
import { BondStartDto, NftCard } from 'src/type';

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

export const useBondStart = (onSuccess: () => void) => {
  const { account } = useWeb3React();
  const queryClient = useQueryClient();
  return useMutation((bondStartDto: BondStartDto) => startBond(bondStartDto), {
    onSuccess: (res: any) => {
      toast
        .promise(res.wait, {
          pending: 'transaction in progress',
          success: `Start Bond was successful.`,
          error: 'transaction is failed 🤯',
        })
        .then(() => {
          onSuccess();
          toastSuccess('Funding has been successful.');
          queryClient.invalidateQueries([
            TURNSTILE_BOND,
            'sellerBondStatus',
            account,
          ]);
          queryClient.invalidateQueries([TURNSTILE_BOND, 'currentBondStatus']);
        });
    },
    onError: (e: any) => {
      toastError(e);
    },
  });
};
