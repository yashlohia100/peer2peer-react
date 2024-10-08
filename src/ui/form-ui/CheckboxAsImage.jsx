export default function CheckboxAsImage({ text, register, varName }) {
  const imageName = text.toLowerCase().replaceAll(' ', '-') + '.png';
  const imageUrl =
    import.meta.env.VITE_IMAGE_URL + '/' + varName + '/' + imageName;

  return (
    <li>
      <input
        type="checkbox"
        id={text}
        {...register(varName, {
          required: 'Please select at least one option.',
        })}
        value={text}
        className="peer hidden"
      />
      <label
        htmlFor={text}
        className="flex flex-col items-center gap-1 rounded-md bg-zinc-100 p-2 text-zinc-800 transition-colors hover:cursor-pointer peer-checked:bg-emerald-500 peer-checked:text-emerald-50"
      >
        <img src={imageUrl} alt={text} className="h-16 w-16 object-contain" />
        <span className="text-xs font-medium capitalize md:text-sm">
          {text}
        </span>
      </label>
    </li>
  );
}
