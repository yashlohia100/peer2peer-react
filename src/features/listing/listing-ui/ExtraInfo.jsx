import TextBubble from './TextBubble';

export default function ExtraInfo({ highlights }) {
  return (
    <section className="px-4 py-7">
      <h3 className="mb-4 text-lg font-medium text-zinc-600">Extra Info</h3>

      <ul className="flex flex-wrap gap-4">
        {highlights.map((text) => (
          <TextBubble key={text} text={text} />
        ))}
      </ul>
    </section>
  );
}
