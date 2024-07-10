import Button from '../../ui/Button';

const inputStyles =
  'rounded-md bg-zinc-200/75 px-2 py-1 text-zinc-800 transition duration-300 focus:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-300';

export default function UpdateDetails({ name, email }) {
  return (
    <div className="flex flex-col items-center gap-4 py-6 text-sm">
      <h2 className="text-lg font-medium text-zinc-600">Update details</h2>
      <div className="flex w-56 flex-col gap-1">
        <label htmlFor="name" className="font-medium text-zinc-600">
          Username
        </label>
        <input
          type="text"
          name=""
          id="name"
          defaultValue={name}
          className={inputStyles}
        />
      </div>

      <div className="flex w-56 flex-col gap-1">
        <label htmlFor="email" className="font-medium text-zinc-600">
          Email
        </label>
        <input
          type="email"
          name=""
          id="email"
          defaultValue={email}
          className={inputStyles}
        />
      </div>

      <div className="mt-2 text-center">
        <Button variant="small">Update</Button>
      </div>
    </div>
  );
}
