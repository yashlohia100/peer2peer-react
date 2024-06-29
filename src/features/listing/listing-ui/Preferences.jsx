import ImageIconBox from './ImageIconBox';

export default function Preferences({ preferences }) {
  return (
    <section className="px-4 py-7">
      <h3 className="mb-6 text-lg font-medium text-zinc-600">Preferences</h3>

      <ul className="grid grid-cols-3 justify-items-center gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {preferences.map((preference) => (
          <ImageIconBox
            key={preference}
            text={preference}
            imageBaseUrl={`${import.meta.env.VITE_IMAGE_URL}/preferences`}
          />
        ))}
      </ul>
    </section>
  );
}
