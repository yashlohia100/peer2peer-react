export default function FormHeader({ heading }) {
  return (
    <div>
      <h2 className="text-center text-lg font-medium text-zinc-600 lg:text-xl">
        {heading}
      </h2>
      <p className="text-center text-zinc-500">Enter your details below.</p>
    </div>
  );
}
