import NewListing from './NewListing';
import ProfileImage from './ProfileImage';
import UpdateDetails from './UpdateDetails';

export default function ProfilePage() {
  return (
    <div className="mx-auto min-h-screen max-w-lg divide-y-2 pt-6">
      <ProfileImage />
      <UpdateDetails />
      <NewListing />
    </div>
  );
}
