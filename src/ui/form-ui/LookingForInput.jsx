import RadioAsButton from './RadioAsButton';

const lookingFor = ['male', 'female', 'anyone'];

export default function LookingForInput({ register }) {
  return (
    <div>
      <h3 className="mb-1 font-medium text-zinc-600">Looking for*</h3>

      <ul className="flex w-fit items-center gap-4 rounded-md border p-4">
        {lookingFor.map((text) => (
          <RadioAsButton
            key={text}
            text={text}
            register={register}
            varName="lookingFor"
          />
        ))}
      </ul>
    </div>
  );
}
