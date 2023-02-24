export const TURNSTILE_BOND_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_turnstile',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'NotActive',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotSeller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TransferFailed',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
    ],
    name: 'TransferBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'URI',
    type: 'event',
  },
  {
    inputs: [],
    name: 'allBondStatus',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'accrued',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'enum TurnstileBond.Status',
                name: 'status',
                type: 'uint8',
              },
              {
                internalType: 'address payable',
                name: 'seller',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'softCap',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'hardCap',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'premium',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'raised',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'received',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'accrued',
                type: 'uint256',
              },
            ],
            internalType: 'struct TurnstileBond.BondInfo',
            name: 'info',
            type: 'tuple',
          },
        ],
        internalType: 'struct TurnstileBond.BondStatusResponse[]',
        name: 'info',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allBonds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'owners',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'balances',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'bondInfo',
    outputs: [
      {
        internalType: 'enum TurnstileBond.Status',
        name: 'status',
        type: 'uint8',
      },
      {
        internalType: 'address payable',
        name: 'seller',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'softCap',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'hardCap',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'raised',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'received',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'accrued',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'bondStatus',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'accrued',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'enum TurnstileBond.Status',
                name: 'status',
                type: 'uint8',
              },
              {
                internalType: 'address payable',
                name: 'seller',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'softCap',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'hardCap',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'premium',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'raised',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'received',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'accrued',
                type: 'uint256',
              },
            ],
            internalType: 'struct TurnstileBond.BondInfo',
            name: 'info',
            type: 'tuple',
          },
        ],
        internalType: 'struct TurnstileBond.BondStatusResponse',
        name: 'info',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'cancel',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'claimableAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentBondStatus',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'accrued',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'enum TurnstileBond.Status',
                name: 'status',
                type: 'uint8',
              },
              {
                internalType: 'address payable',
                name: 'seller',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'softCap',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'hardCap',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'premium',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'raised',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'received',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'accrued',
                type: 'uint256',
              },
            ],
            internalType: 'struct TurnstileBond.BondInfo',
            name: 'info',
            type: 'tuple',
          },
        ],
        internalType: 'struct TurnstileBond.BondStatusResponse[]',
        name: 'info',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'currentBonds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'fund',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'getClaimableBond',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'accrued',
                type: 'uint256',
              },
              {
                components: [
                  {
                    internalType: 'enum TurnstileBond.Status',
                    name: 'status',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address payable',
                    name: 'seller',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'softCap',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'hardCap',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'premium',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'raised',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'received',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'accrued',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct TurnstileBond.BondInfo',
                name: 'info',
                type: 'tuple',
              },
            ],
            internalType: 'struct TurnstileBond.BondStatusResponse',
            name: 'bondStatus',
            type: 'tuple',
          },
        ],
        internalType: 'struct TurnstileBond.ClaimableBondResponse[]',
        name: 'info',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'harvest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'pay',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'receiveFund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_seller',
        type: 'address',
      },
    ],
    name: 'sellerBondStatus',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'accrued',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'enum TurnstileBond.Status',
                name: 'status',
                type: 'uint8',
              },
              {
                internalType: 'address payable',
                name: 'seller',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'softCap',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'hardCap',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'premium',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'raised',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'received',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'accrued',
                type: 'uint256',
              },
            ],
            internalType: 'struct TurnstileBond.BondInfo',
            name: 'info',
            type: 'tuple',
          },
        ],
        internalType: 'struct TurnstileBond.BondStatusResponse[]',
        name: 'info',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_seller',
        type: 'address',
      },
    ],
    name: 'sellerInfo',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'tokenIds',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'sellerNfts',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_softCap',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_hardCap',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_premium',
        type: 'uint256',
      },
    ],
    name: 'start',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'turnstile',
    outputs: [
      {
        internalType: 'contract ITurnstile',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'uri',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];
