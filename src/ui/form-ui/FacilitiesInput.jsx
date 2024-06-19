import CheckboxAsImage from './CheckboxAsImage';

const facilities = [
  'power backup',
  'tv',
  'fridge',
  'kitchen',
  'wifi',
  'machine',
  'ac',
  'cook',
  'parking',
];

export default function FacilitiesInput({ register }) {
  return (
    <div>
      <h3 className="mb-2 font-medium text-zinc-600">Facilities*</h3>

      <ul className="grid grid-cols-3 gap-5 sm:grid-cols-4">
        {facilities.map((facility) => (
          <CheckboxAsImage
            key={facility}
            text={facility}
            register={register}
            varName="facilities"
          />
        ))}
      </ul>
    </div>
  );
}
