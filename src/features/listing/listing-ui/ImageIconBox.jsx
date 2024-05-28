export default function ImageIconBox({ text }) {
  const imageUrl = '/' + text.replaceAll(' ', '-') + '.png';

  return (
    <li className="flex flex-col items-center gap-1">
      <img src={imageUrl} alt={text} className="h-16 w-16" />

      <p className="text-xs capitalize text-zinc-700 md:text-sm">{text}</p>
    </li>
  );
}
