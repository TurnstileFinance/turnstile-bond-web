import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import { TURNSTILE_ABI } from 'src/abi/turnstile';
import { fetcher } from 'src/api';
import { approve, setApprovalForAll } from 'src/api/turnstile';
import { toastError } from 'src/components/Toast';
import { TURNSTILE, TURNSTILE_BOND } from 'src/constants/address';
import { ApproveDto } from 'src/type';

export const useIsApproveForAll = () => {
  const { account, active, library } = useWeb3React();
  return useQuery(
    [TURNSTILE, 'isApprovedForAll', account, TURNSTILE_BOND],
    fetcher(library, TURNSTILE_ABI),
    {
      enabled: active && !!account,
    }
  );
};

export const useIsApprove = (tokenId: string) => {
  const { account, active, library } = useWeb3React();
  return useQuery(
    [TURNSTILE, 'getApproved', tokenId],
    fetcher(library, TURNSTILE_ABI),
    {
      enabled: active && !!account,
    }
  );
};

export const useSetApprovalForAll = () => {
  const { library, account } = useWeb3React();
  const queryClient = useQueryClient();
  return useMutation(() => setApprovalForAll(library), {
    onSuccess: (res: any) => {
      if (!res?.wait) {
        return;
      }
      toast
        .promise(res.wait, {
          pending: 'transaction in progress',
          success: `transaction is successful`,
          error: 'transaction is failed 🤯',
        })
        .then(() => {
          queryClient.invalidateQueries([
            TURNSTILE,
            'isApprovedForAll',
            account,
            TURNSTILE_BOND,
          ]);
        });
    },
    onError: (e: any) => {
      toastError(e);
    },
  });
};

export const useApprove = () => {
  const queryClient = useQueryClient();
  return useMutation((approveDto: ApproveDto) => approve(approveDto), {
    onSuccess: (res: any, variables: ApproveDto) => {
      if (!res?.wait) {
        return;
      }
      toast
        .promise(res.wait, {
          pending: 'transaction in progress',
          success: `approve is successful`,
          error: 'transaction is failed 🤯',
        })
        .then(() => {
          queryClient.invalidateQueries([
            TURNSTILE,
            'getApproved',
            variables.data.tokenId,
          ]);
        });
    },
    onError: (e: any) => {
      toastError(e);
    },
  });
};
