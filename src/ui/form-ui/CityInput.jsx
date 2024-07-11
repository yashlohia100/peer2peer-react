const cities = ['delhi', 'ghaziabad', 'noida'];

export default function CityInput({ register }) {
  return (
    <div>
      <label htmlFor="city" className="mb-1 block font-medium text-zinc-600">
        City*
      </label>

      <select
        id="city"
        {...register('city', { required: 'City is required.' })}
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
