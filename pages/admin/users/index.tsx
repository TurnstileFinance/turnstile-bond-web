import { useQuery } from '@tanstack/react-query';
import AdminLayout from 'layouts/AdminLayout';
import Link from 'next/link';
import { useState } from 'react';
import AdminH1 from 'src/admin/components/AdminMain';
import { Card } from 'src/components/Card';
import { Pagination } from 'src/components/Pagination';
import { Select } from 'src/components/Select';
import { Table } from 'src/components/Table';
import { useQueryString } from 'src/hooks';
import { fetcher } from 'src/plugins/react-query';
import { Paginated, User } from 'src/types';

export default function UserList() {
  const [role, setRole] = useState('ALL');
  const queryString = useQueryString({
    filter: { role: role === 'ALL' ? undefined : role },
  });
  const { data } = useQuery<Paginated<User>>(
    [`/admin/users${queryString}`],
    fetcher,
    { keepPreviousData: true }
  );

  console.log('data: ', data);

  if (!data) {
    return (
      <>
        <AdminH1>Users</AdminH1>
      </>
    );
  }
  return (
    <>
      <AdminH1>Users</AdminH1>

      <div className="flex space-x-4">
        <div className="w-40">
          <Select label="Role" onChange={(e) => setRole(e.target.value)}>
            <option value="ALL">ALL</option>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </Select>
        </div>
      </div>

      <Card>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Th>name</Table.Th>
              <Table.Th>email</Table.Th>
              <Table.Th></Table.Th>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {data.items.map((user) => (
              <Table.Row key={user.id}>
                <Table.Td>{user.name}</Table.Td>
                <Table.Td>{user.email}</Table.Td>
                <Table.Td className="text-right">
                  <Link
                    className="font-normal text-indigo-600 hover:text-indigo-900"
                    href={`/admin/users/${user.id}`}
                  >
                    Details
                  </Link>
                </Table.Td>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <Pagination>
          <Pagination.Label
            count={data?.pagination.currentItemCount || 0}
            total={data?.pagination.totalItemCount || 0}
          />
          <Pagination.Nav
            basePath={window.location.pathname}
            total={data?.pagination.totalItemCount || 0}
          />
        </Pagination>
      </Card>
    </>
  );
}

UserList.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
