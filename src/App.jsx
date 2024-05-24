import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './ui/Homepage';
import ListingsPage from './features/listing/ListingsPage';
import ListingDetail from './features/listing/ListingDetail';
import Login from './features/user/Login';
import Signup from './features/user/Signup';
import PageNotFound from './ui/PageNotFound';
import AppLayout from './ui/AppLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/listings/:listingId" element={<ListingDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
