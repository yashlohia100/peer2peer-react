import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import { useSignup } from './useSignup';

const inputStyles =
  'rounded-md bg-zinc-200/75 px-2 py-1 text-zinc-800 transition duration-300 focus:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-300';
const errorStyles = 'rounded-md bg-red-100 px-2 py-0.5 text-xs text-red-500';

export default function Signup() {
  const { isPending, signup } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onValid(data) {
    signup(data);
  }

  return (
    <div className="h-screen bg-zinc-50">
      <form
        onSubmit={handleSubmit(onValid)}
        className="mx-auto max-w-sm px-4 pt-12 text-sm"
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

          <div className="flex items-center gap-4">
            <div>
              <input
                type="radio"
                id="male"
                {...register('gender', { required: true })}
                value="male"
                className="peer hidden"
              />
              <label
                htmlFor="male"
                className="inline-block rounded-md bg-zinc-200 px-2 py-1 font-medium capitalize text-zinc-700 transition-colors hover:cursor-pointer peer-checked:bg-emerald-500 peer-checked:text-emerald-50"
              >
                Male
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="female"
                {...register('gender', { required: true })}
                value="female"
                className="peer hidden"
              />
              <label
                htmlFor="female"
                className="inline-block rounded-md bg-zinc-200 px-2 py-1 font-medium capitalize text-zinc-700 transition-colors hover:cursor-pointer peer-checked:bg-emerald-500 peer-checked:text-emerald-50"
              >
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="small" disabled={isPending}>
            {isPending ? 'Working...' : 'Signup'}
          </Button>
        </div>
      </form>
    </div>
  );
}
