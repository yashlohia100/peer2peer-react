import { Link } from 'react-router-dom';
import { useGetCurrentUser } from '../features/user/useGetCurrentUser';

export default function Navbar() {
  const { user } = useGetCurrentUser();

  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between bg-emerald-500 px-4 py-2 text-emerald-100">
      <h1 className="text-2xl font-medium">Peer2peer</h1>

      {user ? (
        <div className="flex items-center gap-5">
          <button className="text-sm font-semibold uppercase">Logout</button>
          <Link to="profile">
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/users/${user.photo}`}
              alt="profile-icon"
              className="w-10 rounded-full"
            />
          </Link>
        </div>
      ) : (
        <div className="space-x-3 text-sm font-semibold uppercase tracking-wide md:space-x-4">
          <Link to="login">Login</Link>
          <Link to="signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}
