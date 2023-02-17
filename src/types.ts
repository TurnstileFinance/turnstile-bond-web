export interface Paginated<T> {
  items: T[];
  pagination: {
    totalItemCount: number;
    currentItemCount: number;
    totalPage: number;
    currentPage: number;
    itemsPerPage: number;
  };
}

export interface PaginationDto {
  sort?: string;
  filter?: string;
  page?: number;
  itemsPerPage?: number;
}

export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  role: Role;
  name: string;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
