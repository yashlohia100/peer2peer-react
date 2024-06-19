export default function DescriptionInput({ register, text }) {
  return (
    <div>
      <label
        htmlFor="description"
        className="mb-1 block font-medium text-zinc-600"
      >
        Description*
      </label>

      <textarea
        id="description"
        cols="50"
        rows="5"
        defaultValue={text}
        {...register('description', {
          required: 'Description is required.',
        })}
        className="rounded-md bg-zinc-200 px-2 py-1 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      ></textarea>
    </div>
  );
}
