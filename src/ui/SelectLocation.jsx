export default function SelectLocation() {
  return (
    <form className="flex items-center justify-center gap-3">
      <select className="w-56 rounded-full px-4 py-2 text-zinc-700 transition focus:outline-none focus:ring focus:ring-emerald-300 md:py-3">
        <option value="ghaziabad">Ghaziabad</option>
        <option value="delhi">Delhi</option>
        <option value="noida">Noida</option>
      </select>

      <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-50 transition hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 md:px-6 md:py-3 md:text-base">
        Find
      </button>
    </form>
  );
}
