import { Role, User } from './types';

export const users: User[] = [
  {
    id: 1,
    createdAt: '2021-06-04T05:36:05.903Z',
    updatedAt: '2021-06-04T05:36:05.903Z',
    email: 'khris@example.com',
    role: Role.USER,
    name: '강정모',
  },
  {
    id: 2,
    createdAt: '2021-06-04T05:36:05.903Z',
    updatedAt: '2021-06-04T05:36:05.903Z',
    email: 'charles@example.com',
    role: Role.USER,
    name: '최용철',
  },
  {
    id: 3,
    createdAt: '2021-06-04T05:36:05.903Z',
    updatedAt: '2021-06-04T05:36:05.903Z',
    email: 'chan@example.com',
    role: Role.USER,
    name: '임주찬',
  },
];

export const NFT_DUMMY = [
  {
    id: 1,
    title: 'CSR NFT1',
    contents: 'accrued Canto balance',
    price: 5700,
  },
  {
    id: 2,
    title: 'CSR NFT2',
    contents: 'accrued Canto balance',
    price: 5000,
  },
  {
    id: 3,
    title: 'CSR NFT3',
    contents: 'accrued Canto balance',
    price: 5000,
  },
  {
    id: 4,
    title: 'CSR NFT4',
    contents: 'accrued Canto balance',
    price: 5000,
  },
  {
    id: 5,
    title: 'CSR NFT5',
    contents: 'accrued Canto balance',
    price: 5000,
  },
  {
    id: 6,
    title: 'CSR NFT6',
    contents: 'accrued Canto balance',
    price: 5000,
  },
  {
    id: 7,
    title: 'CSR NFT7',
    contents: 'accrued Canto balance',
    price: 5000,
  },
  {
    id: 8,
    title: 'CSR NFT8',
    contents: 'accrued Canto balance',
    price: 5000,
  },
];

export const CURRENT_BONDS_DUMMY = [
  {
    id: 1,
    contents: 'Bond ID',
    description: 'NFT id',
    price: 5700,
  },
  {
    id: 2,
    contents: 'minGoal',
    description: 'canto',
    price: 5000,
  },
  {
    id: 3,
    contents: 'maxGoal',
    description: 'canto',
    price: 5000,
  },
  {
    id: 4,
    contents: 'Funding Status',
    description: '% to minGoal',
    price: 5000,
  },
  {
    id: 5,
    contents: 'Premium',
    description: '%',
    price: 5000,
  },
];

export const CLOSED_BONDS_DUMMY = [
  {
    id: 1,
    contents: 'Bond ID',
    description: 'NFT id',
    price: 5700,
  },
  {
    id: 2,
    contents: 'Bond Value + Prem.',
    description: 'canto',
    price: 5000,
  },
  {
    id: 3,
    contents: 'Accured Reserve',
    description: '% to Total',
    price: 5000,
  },
  {
    id: 4,
    contents: 'Your Share',
    description: '%',
    price: 5000,
  },
  {
    id: 5,
    contents: 'Claimable Amount',
    description: 'canto',
    price: 5000,
  },
];

interface CurrentBondsContentType {
  id: number;
  minGoal: string;
  maxGoal: string;
  fundingStatus: string;
  premium: string;
}

export const CURRENT_BONDS_CONTAENTS_DUMMY = [
  {
    id: 1,
    minGoal: '245',
    maxGoal: '1,000',
    fundingStatus: '56.7%',
    premium: '80.2%',
  },
  {
    id: 2,
    minGoal: '124',
    maxGoal: '542',
    fundingStatus: '77%',
    premium: '87%',
  },
  {
    id: 3,
    minGoal: '234',
    maxGoal: '986',
    fundingStatus: '45%',
    premium: '23%',
  },
];

export const CURRENT_BONDS_CONTENT_KEYS: Array<keyof CurrentBondsContentType> =
  ['id', 'minGoal', 'maxGoal', 'fundingStatus', 'premium'];

interface ClosedBondsContentType {
  id: number;
  bondValue: string;
  accuredReserve: string;
  yourShare: string;
  claimableAmount: string;
}

export const CLOSED_BONDS_CONTAENTS_DUMMY = [
  {
    id: 1,
    bondValue: '245',
    accuredReserve: '56.7%',
    yourShare: '80.2%',
    claimableAmount: '124',
  },
  {
    id: 2,
    bondValue: '124',
    accuredReserve: '77%',
    yourShare: '0%',
    claimableAmount: '124',
  },
  {
    id: 3,
    bondValue: '234',
    accuredReserve: '45%',
    yourShare: '23%',
    claimableAmount: '456',
  },
];

export const CLOSED_BONDS_CONTAENT_KEYS: Array<keyof ClosedBondsContentType> = [
  'id',
  'bondValue',
  'accuredReserve',
  'yourShare',
  'claimableAmount',
];
