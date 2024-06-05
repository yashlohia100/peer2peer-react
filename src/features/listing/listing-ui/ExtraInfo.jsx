import TextBubble from './TextBubble';

export default function ExtraInfo() {
  const extraInfo = [
    'Park nearby',
    'Market nearby',
    'Metro nearby',
    'Seperate washrooms',
    'Balcony',
    'Gym nearby',
    'No restriction',
    'Gated society',
    'Newly built',
  ];

  return (
    <section className="px-4 py-7">
      <h3 className="mb-4 text-lg font-medium text-zinc-600">Extra Info</h3>

      <ul className="flex flex-wrap gap-4">
        {extraInfo.map((text) => (
          <TextBubble key={text} text={text} />
        ))}
      </ul>
    </section>
  );
}
