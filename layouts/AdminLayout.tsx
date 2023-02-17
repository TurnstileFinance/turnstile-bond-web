import AdminMain from 'src/admin/components/AdminMain';
import { Sidebar } from 'src/components/Sidebar';
import { useAuth } from 'src/hooks';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { logout } = useAuth();
  return (
    <div className="flex h-screen">
      <Sidebar>
        <Sidebar.Title>Admin</Sidebar.Title>
        <Sidebar.Menu>
          <Sidebar.Menu.Item text="유저리스트" to="/admin/users" />
          <Sidebar.Menu.Item text="로그아웃" onClick={logout} />
        </Sidebar.Menu>
      </Sidebar>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AdminMain>{children}</AdminMain>
      </div>
    </div>
  );
}
