import { capitalizeFirstLetter } from '../../utils/helpers';

const highlightsRoommate = [
  'college student',
  'working full time',
  'working night shifts',
  'age less than 25',
  'age greater than 25',
  'have 2 wheeler',
  'have 4 wheeler',
  'have pets',
  'vegetarian',
  'need no furnishing',
];

const highlightsRoom = [
  'market nearby',
  'close to metro station',
  'gym nearby',
  'park nearby',
  'public transport nearby',
  'attached washroom',
  'attached balcony',
  'gated society',
  'no restriction',
  'newly built',
  'separate washrooms',
  'house keeping',
];

export default function HighlightsInput({ register, highlightsFor }) {
  const highlights =
    highlightsFor === 'room' ? highlightsRoom : highlightsRoommate;

  return (
    <div>
      <h3 className="mb-2 font-medium text-zinc-600">Highlights*</h3>

      <ul className="flex flex-wrap items-center gap-4">
        {highlights.map((highlight) => (
          <li key={highlight}>
            <input
              type="checkbox"
              id={highlight}
              {...register('highlights', {
                required: 'Please select at least one option.',
              })}
              value={highlight}
              className="peer hidden"
            />
            <label
              htmlFor={highlight}
              className="rounded-md bg-zinc-200 px-2 py-1 text-xs font-medium text-zinc-800 transition-colors hover:cursor-pointer peer-checked:bg-emerald-500 peer-checked:text-emerald-50 md:text-sm"
            >
              {capitalizeFirstLetter(highlight)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
