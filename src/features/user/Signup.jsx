import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';

const inputStyles =
  'rounded-md bg-zinc-200/75 px-2 py-1 text-zinc-800 transition duration-300 focus:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-300';
const errorStyles = 'rounded-md bg-red-100 px-2 py-0.5 text-xs text-red-500';

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onValid(data) {
    console.log(data);
  }

  return (
    <div className="h-screen bg-zinc-50">
      <form
        onSubmit={handleSubmit(onValid)}
        className="mx-auto max-w-sm pt-12 text-sm"
      >
        <h2 className="text-center text-lg font-medium text-zinc-600">
          Create your account
        </h2>

        <div className="space-y-4 py-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium text-zinc-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={inputStyles}
              {...register('name', { required: 'Name is required.' })}
            />
            {errors.name && (
              <p className={errorStyles}>{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-zinc-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={inputStyles}
              {...register('email', { required: 'Email is required.' })}
            />
            {errors.email && (
              <p className={errorStyles}>{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium text-zinc-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={inputStyles}
              {...register('password', { required: 'Password is required.' })}
            />
            {errors.password && (
              <p className={errorStyles}>{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="passwordConfirm"
              className="font-medium text-zinc-600"
            >
              Password Confirm
            </label>
            <input
              type="password"
              id="passwordConfirm"
              className={inputStyles}
              {...register('passwordConfirm', {
                required: 'Password confirm is required.',
              })}
            />
            {errors.passwordConfirm && (
              <p className={errorStyles}>{errors.passwordConfirm.message}</p>
            )}
          </div>
        </div>

        <div className="text-center">
          <Button variant="small">Signup</Button>
        </div>
      </form>
    </div>
  );
}
