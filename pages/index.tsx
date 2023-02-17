import { Button } from 'src/components/Button';
import { useAuth } from 'src/hooks';

export default function HomePage() {
  const { authenticated, logout } = useAuth();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h1>HomePage</h1>

      {authenticated ? (
        <>
          <Button text="MyPage" className="filled-brand-1" to="/mypage" />
          <Button text="Logout" className="outlined-red-500" onClick={logout} />
        </>
      ) : (
        <>
          <Button text="Login" className="filled-gray-800" to="/login" />
          <Button text="Signup" className="outlined-gray-800" to="/signup" />
        </>
      )}
    </div>
  );
}
