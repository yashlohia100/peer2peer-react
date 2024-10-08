export default function IconBox({ icon, text, isSelected, onClick }) {
  return (
    <button
      className={`rounded-lg border border-zinc-400 px-4 py-2 transition duration-300 hover:bg-zinc-200/30 hover:text-emerald-500 hover:shadow-lg ${isSelected ? 'bg-zinc-200/30 text-emerald-500 shadow-lg' : 'text-zinc-400'}`}
      onClick={onClick}
    >
      <span className="text-8xl">{icon}</span>

      <p className="font-medium text-zinc-600">{text}</p>
    </button>
  );
}
