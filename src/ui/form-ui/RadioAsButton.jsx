export default function RadioAsButton({ text, register, varName }) {
  return (
    <li>
      <input
        type="radio"
        id={text}
        {...register(varName, {
          required: 'Please select at least one option.',
        })}
        value={text}
        className="peer hidden"
      />
      <label
        htmlFor={text}
        className="rounded-md bg-zinc-200 px-2 py-1 font-medium capitalize text-zinc-700 transition-colors hover:cursor-pointer peer-checked:bg-emerald-500 peer-checked:text-emerald-50"
      >
        {text}
      </label>
    </li>
  );
}
