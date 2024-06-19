import CheckboxAsImage from './CheckboxAsImage';

const preferences = [
  'night owl',
  'early bird',
  'studious',
  'fitness freak',
  'sporty',
  'wanderer',
  'party lover',
  'pet lover',
  'vegan',
  'non alcoholic',
  'music lover',
  'non smoker',
];

export default function PreferencesInput({ register }) {
  return (
    <div>
      <h3 className="mb-2 font-medium text-zinc-600">Preferences*</h3>

      <ul className="grid grid-cols-3 gap-5 sm:grid-cols-4">
        {preferences.map((preference) => (
          <CheckboxAsImage
            key={preference}
            text={preference}
            register={register}
            varName="preferences"
          />
        ))}
      </ul>
    </div>
  );
}
