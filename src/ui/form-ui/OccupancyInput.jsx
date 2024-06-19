import RadioAsButton from './RadioAsButton';

const occupancy = ['single', 'dual', 'any'];

export default function OccupancyInput({ register }) {
  return (
    <div>
      <h3 className="mb-1 font-medium text-zinc-600">Occupancy*</h3>

      <ul className="flex w-fit items-center gap-4 rounded-md border p-4">
        {occupancy.map((text) => (
          <RadioAsButton
            key={text}
            text={text}
            register={register}
            varName="occupancy"
          />
        ))}
      </ul>
    </div>
  );
}
