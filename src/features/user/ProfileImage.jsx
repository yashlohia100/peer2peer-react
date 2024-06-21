export default function ProfileImage() {
  return (
    <div className="flex flex-col items-center gap-3 py-6">
      <img
        src="profile-photo.jpg"
        alt="profile photo"
        className="w-40 rounded-full"
      />
      <h3 className="text-lg font-medium text-zinc-600">Yash Lohia</h3>
    </div>
  );
}
