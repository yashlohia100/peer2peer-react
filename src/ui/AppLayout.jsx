import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Navbar />

      <div>
        <main className="mx-auto max-w-6xl">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
