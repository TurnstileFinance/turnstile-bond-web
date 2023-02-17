import { useQuery } from '@tanstack/react-query';
import AdminLayout from 'layouts/AdminLayout';
import { useRouter } from 'next/router';
import AdminH1 from 'src/admin/components/AdminMain';
import { Button } from 'src/components/Button';
import { Card } from 'src/components/Card';
import TextField from 'src/components/TextField';
import { fetcher } from 'src/plugins/react-query';
import { User } from 'src/types';

export default function UserShow() {
  const { query } = useRouter();
  const userId = query.id as string;
  const { data: user } = useQuery<User>([`/admin/users/${query.id}`], fetcher);

  if (!user) return <></>;
  return (
    <>
      <AdminH1>User</AdminH1>

      <Card>
        <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:px-6 md:grid-cols-2 md:px-8">
          <TextField label="email" type="email" value={user.email} disabled />
          <TextField label="name" value={user.name} disabled />
        </div>

        <div className="flex justify-end space-x-4 px-4 py-4 sm:px-6 md:px-8">
          <Button
            text="Edit"
            to={`/admin/users/${userId}/edit`}
            className="filled-indigo-500 h-10 text-sm hover:bg-indigo-600"
          />
        </div>
      </Card>
    </>
  );
}

UserShow.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
