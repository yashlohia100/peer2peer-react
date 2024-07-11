export default function LocationInput({ register }) {
  return (
    <div>
      <label
        htmlFor="location"
        className="mb-1 block font-medium text-zinc-600"
      >
        Location*
      </label>
      <input
        type="text"
        id="location"
        {...register('location', { required: 'Location is required.' })}
        className="w-52 rounded-md bg-zinc-200 px-2 py-1 font-medium text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        maxLength="30"
        placeholder="Rohini, Delhi"
      />
    </div>
  );
}
