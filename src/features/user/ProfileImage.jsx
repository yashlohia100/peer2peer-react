export default function ProfileImage({ name, photo }) {
  return (
    <div className="flex flex-col items-center gap-3 py-6">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}/users/${photo}`}
        alt="profile photo"
        className="w-40 rounded-full"
      />
      <h3 className="text-lg font-medium text-zinc-600">{name}</h3>
    </div>
  );
}
