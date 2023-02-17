import { useQuery } from '@tanstack/react-query';
import AdminLayout from 'layouts/AdminLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AdminH1 from 'src/admin/components/AdminMain';
import { Button } from 'src/components/Button';
import { Card } from 'src/components/Card';
import TextField from 'src/components/TextField';
import { api } from 'src/plugins/axios';
import { fetcher } from 'src/plugins/react-query';
import { User } from 'src/types';

interface FormValues {
  email: string;
  name: string;
}

export default function UserEdit() {
  const router = useRouter();
  const userId = router.query.id as string;
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { data: user } = useQuery<User>([`/admin/users/${userId}`], fetcher);
  useEffect(() => reset(user), [reset, user]);

  if (!user) return <></>;
  return (
    <>
      <AdminH1>User</AdminH1>

      <Card>
        <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:px-6 md:grid-cols-2 md:px-8">
          <TextField
            label="email"
            type="email"
            helper={errors.email?.message}
            {...register('email', { required: '이메일을 입력해주세요' })}
          />
          <TextField
            label="name"
            helper={errors.name?.message}
            {...register('name', { required: '이름을 입력해주세요' })}
          />
        </div>

        <div className="flex justify-end space-x-4 px-4 py-4 sm:px-6 md:px-8">
          <Button
            text="Cancel"
            to={`/admin/users/${userId}`}
            className="outlined-gray-600 h-10 text-sm hover:bg-gray-50"
          />
          <Button
            text="Save"
            className="filled-indigo-500 h-10 text-sm hover:bg-indigo-600"
            onClick={handleSubmit(async (data) => {
              await api.patch(`/admin/users/${userId}`, data);
              router.push(`/admin/users/${userId}`);
            })}
          />
        </div>
      </Card>
    </>
  );
}

UserEdit.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
