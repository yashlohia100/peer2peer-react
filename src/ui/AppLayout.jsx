import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-zinc-50 text-red-500">
      <div className="bg-emerald-500">
        <Navbar />
      </div>

      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-6xl">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
