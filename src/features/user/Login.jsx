import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import { useLogin } from './useLogin';

const inputStyles =
  'rounded-md bg-zinc-200/75 px-2 py-1 text-zinc-800 transition duration-300 focus:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-300';
const errorStyles = 'rounded-md bg-red-100 px-2 py-0.5 text-xs text-red-500';

export default function Login() {
  const { isPending, login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onValid(data) {
    login(data);
  }

  return (
    <div className="h-screen bg-zinc-50">
      <form
        onSubmit={handleSubmit(onValid)}
        className="mx-auto max-w-sm px-4 pt-12 text-sm"
      >
        <h2 className="text-center text-lg font-medium text-zinc-600">
          Log into your account
        </h2>

        <div className="space-y-4 py-4">
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
        </div>

        <div className="text-center">
          <Button variant="small" disabled={isPending}>
            {isPending ? 'Working...' : 'Login'}
          </Button>
        </div>
      </form>
    </div>
  );
}
