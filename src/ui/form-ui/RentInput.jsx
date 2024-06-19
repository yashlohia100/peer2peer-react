export default function RentInput({ register }) {
  return (
    <div>
      <label htmlFor="rent" className="mb-1 block font-medium text-zinc-600">
        Approx rent*
      </label>

      <input
        type="number"
        id="rent"
        placeholder="5000"
        {...register('rent', { required: 'Rent is required.', min: 1000 })}
        className="w-52 rounded-md bg-zinc-200 px-2 py-1 font-medium text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  );
}
