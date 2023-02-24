import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect } from 'react';
import { networkParams } from 'src/constants/network';
import {
  getItemInLocalStorage,
  LOCAL_STORAGE_KEY,
  setItemInLocalStorage,
} from 'src/utils/localstorage';

import { toHex } from '../utils';

const injected = new InjectedConnector({
  supportedChainIds: [7700, 740, 31337],
});

export const useWeb3 = () => {
  const { activate, account, deactivate } = useWeb3React();

  const switchMetaMaskNetwork = async (chainId: string) => {
    if (window.ethereum && window.ethereum.networkVersion !== chainId) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: toHex(chainId) }],
        });
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          try {
            if (!(toHex(chainId) in networkParams)) {
              alert('Network not supported');
            }
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [networkParams[toHex(chainId)]],
            });
          } catch (error) {
            console.log('switchMetaMaskNetwork error: ', error);
          }
        }
      }
    }
  };

  const connect = () => {
    setItemInLocalStorage(LOCAL_STORAGE_KEY.PROVIDER, 'metamask');
    return activate(injected).then(() => {
      switchMetaMaskNetwork('31337');
    });
  };

  const disconnect = () => {
    deactivate();
    setItemInLocalStorage(LOCAL_STORAGE_KEY.PROVIDER, '');
  };

  useEffect(() => {
    const provider = getItemInLocalStorage(LOCAL_STORAGE_KEY.PROVIDER);
    if (provider) {
      connect();
    }
  }, []);

  return { connect, disconnect, account };
};
