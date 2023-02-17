import { api } from './axios';

export function fetcher({ queryKey }: any) {
  return api.get(queryKey[0]).then(({ data }) => data);
}
