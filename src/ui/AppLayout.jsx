import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-zinc-100 text-red-500">
      <div className="bg-emerald-500">
        <Navbar />
      </div>

      <div>
        <main className="mx-auto max-w-6xl">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
