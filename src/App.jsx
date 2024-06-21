import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './ui/Homepage';
import ListingsPage from './features/listing/ListingsPage';
import ListingDetail from './features/listing/ListingDetail';
import Login from './features/user/Login';
import Signup from './features/user/Signup';
import PageNotFound from './ui/PageNotFound';
import AppLayout from './ui/AppLayout';
import RoommateListingForm from './features/listing/RoommateListingForm';
import RoomListingForm from './features/listing/RoomListingForm';
import ProfilePage from './features/user/ProfilePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="listings" element={<ListingsPage />} />
          <Route path="listings/:listingId" element={<ListingDetail />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="new-listing/roommate" element={<RoommateListingForm />} />
        <Route path="new-listing/room" element={<RoomListingForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
