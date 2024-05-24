import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between bg-emerald-500 px-4 py-2 text-emerald-100">
      <h1 className="text-2xl font-medium">Peer2peer</h1>

      <div className="space-x-3 text-sm font-semibold uppercase tracking-wide md:space-x-4">
        <Link to="login">Login</Link>
        <Link to="signup">Signup</Link>
      </div>
    </nav>
  );
}
