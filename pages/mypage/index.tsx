import { useQuery } from '@tanstack/react-query';
import { fetcher } from 'src/plugins/react-query';
import { User } from 'src/types';

export default function MyPage() {
  const { data: me } = useQuery<User>(['/users/me'], fetcher);

  if (!me) return <></>;
  return (
    <>
      <h1>MyPage</h1>

      <pre>{JSON.stringify(me, undefined, 2)}</pre>
    </>
  );
}
