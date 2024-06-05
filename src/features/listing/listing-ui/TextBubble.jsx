import { HiMiniCheck } from 'react-icons/hi2';

export default function TextBubble({ text }) {
  return (
    <li className="flex items-center gap-1 rounded-full bg-zinc-200/90 px-2 py-1 text-xs font-medium text-zinc-600">
      <HiMiniCheck />
      <span>{text}</span>
    </li>
  );
}
