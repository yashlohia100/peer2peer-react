import NewListing from './NewListing';
import ProfileImage from './ProfileImage';
import UpdateDetails from './UpdateDetails';

export default function ProfilePage() {
  return (
    <div className="min-h-screen divide-y-2 pt-6">
      <ProfileImage />
      <UpdateDetails />
      <NewListing />
    </div>
  );
}
