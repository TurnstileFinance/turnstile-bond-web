import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useWeb3React } from '@web3-react/core';
import { BigNumber } from 'ethers';
import { toast } from 'react-toastify';
import { TURNSTILE_BOND_ABI } from 'src/abi/turnstileBond';
import { fetcher } from 'src/api';
import { cancelBond, claimBond, fundBond, startBond } from 'src/api/bond';
import { toastError } from 'src/components/Toast';
import { TURNSTILE_BOND } from 'src/constants/address';
import {
  BondCancelDto,
  BondFundDto,
  BondStartDto,
  ClaimableNftCard,
  ClaimFundDto,
  NftCard,
} from 'src/type';

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
  return useQuery<Array<ClaimableNftCard>>(
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
      if (!res?.wait) {
        return;
      }
      toast
        .promise(res.wait, {
          pending: 'transaction in progress',
          success: `Start Bond was successful.`,
          error: 'transaction is failed 🤯',
        })
        .then(() => {
          onSuccess();
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

export const useCancelBond = (onSuccess: () => void) => {
  const { account } = useWeb3React();
  const queryClient = useQueryClient();
  return useMutation(
    (bondCancelDto: BondCancelDto) => cancelBond(bondCancelDto),
    {
      onSuccess: (res: any) => {
        if (!res?.wait) {
          return;
        }
        toast
          .promise(res.wait, {
            pending: 'transaction in progress',
            success: `Cancel Bond was successful.`,
            error: 'transaction is failed 🤯',
          })
          .then(() => {
            onSuccess();
            queryClient.invalidateQueries([
              TURNSTILE_BOND,
              'sellerBondStatus',
              account,
            ]);
            queryClient.invalidateQueries([
              TURNSTILE_BOND,
              'currentBondStatus',
            ]);
          });
      },
      onError: (e: any) => {
        toastError(e);
      },
    }
  );
};

export const useBalanceOfToken = (tokenId: string) => {
  const { account, active, library } = useWeb3React();
  return useQuery<BigNumber>(
    [TURNSTILE_BOND, 'balanceOf', account, tokenId],
    fetcher(library, TURNSTILE_BOND_ABI),
    {
      enabled: active && !!account,
    }
  );
};

export const useFundBond = (onSuccess: () => void) => {
  const { account } = useWeb3React();
  const queryClient = useQueryClient();
  return useMutation((bondFundDto: BondFundDto) => fundBond(bondFundDto), {
    onSuccess: (res: any) => {
      if (!res?.wait) {
        toastError('transaction is failed 🤯');
        return;
      }
      toast
        .promise(res.wait, {
          pending: 'transaction in progress',
          success: `Fund was successful.`,
          error: 'transaction is failed 🤯',
        })
        .then(() => {
          onSuccess();
          queryClient.invalidateQueries([
            TURNSTILE_BOND,
            'getClaimableBond',
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

export const useClaimBond = (onSuccess: () => void) => {
  const { account } = useWeb3React();
  const queryClient = useQueryClient();
  return useMutation((claimFundDto: ClaimFundDto) => claimBond(claimFundDto), {
    onSuccess: (res: any) => {
      if (!res?.wait) {
        return;
      }
      toast
        .promise(res.wait, {
          pending: 'transaction in progress',
          success: `Claim Bond was successful.`,
          error: 'transaction is failed 🤯',
        })
        .then(() => {
          onSuccess();
          queryClient.invalidateQueries([
            TURNSTILE_BOND,
            'getClaimableBond',
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
