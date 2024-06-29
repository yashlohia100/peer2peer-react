import ImageIconBox from './ImageIconBox';

export default function Facilities({ facilities }) {
  return (
    <section className="px-4 py-7">
      <h3 className="mb-6 text-lg font-medium text-zinc-600">Facilities</h3>

      <ul className="grid grid-cols-3 justify-items-center gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {facilities.map((facility) => (
          <ImageIconBox
            key={facility}
            text={facility}
            imageBaseUrl={`${import.meta.env.VITE_IMAGE_URL}/facilities`}
          />
        ))}
      </ul>
    </section>
  );
}
