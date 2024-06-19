const cities = ['delhi', 'ghaziabad', 'noida'];

export default function SelectLocationForm({ register }) {
  return (
    <div>
      <label
        htmlFor="location"
        className="mb-1 block font-medium text-zinc-600"
      >
        Location*
      </label>

      <select
        id="location"
        {...register('location', { required: 'Location is required.' })}
        className="w-52 rounded-md bg-zinc-200 px-2 py-1 font-medium capitalize text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        {cities.map((city) => {
          return (
            <option key={city} value={city}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
}
