import NewListing from './NewListing';
import ProfileImage from './ProfileImage';
import UpdateDetails from './UpdateDetails';
import { useGetCurrentUser } from './useGetCurrentUser';

export default function ProfilePage() {
  const { isPending, user, error } = useGetCurrentUser();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user</div>;
  }

  return (
    <div className="mx-auto min-h-screen max-w-lg divide-y-2 pt-6">
      <ProfileImage name={user.name} photo={user.photo} />
      <UpdateDetails name={user.name} email={user.email} />
      <NewListing />
    </div>
  );
}
