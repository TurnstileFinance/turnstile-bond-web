export const networkParams: {
  [key: string]: {
    chainId: string;
    chainName: string;
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls: string[];
  };
} = {
  '0x1e14': {
    chainId: '0x1E14',
    chainName: 'CANTO',
    nativeCurrency: {
      name: 'CANTO',
      symbol: 'CANTO',
      decimals: 18,
    },
    rpcUrls: [
      'https://canto.gravitychain.io/',
      'https://canto.slingshot.finance/',
      'https://canto.neobase.one/',
      'https://canto.evm.chandrastation.com/',
    ],
    blockExplorerUrls: ['https://tuber.build/'],
  },
  '0x2e4': {
    chainId: '0x2E4',
    chainName: 'CANTO Testnet',
    nativeCurrency: {
      name: 'CANTO',
      symbol: 'CANTO',
      decimals: 18,
    },
    rpcUrls: ['https://eth.plexnode.wtf/'],
    blockExplorerUrls: ['https://testnet-explorer.canto.neobase.one/'],
  },
};
