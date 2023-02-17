import { useForm } from 'react-hook-form';
import { Button } from 'src/components/Button';
import TextField from 'src/components/TextField';
import { useAuth } from 'src/hooks';

interface FormValues {
  email: string;
  password: string;
  name: string;
}

export default function SignupPage() {
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <>
      <h1>SignupPage</h1>

      <form
        className="flex flex-col space-y-2 p-4"
        onSubmit={handleSubmit((data) => signup(data))}
      >
        <TextField
          type="email"
          label="email"
          placeholder="nicole@example.com"
          helper={errors.email?.message}
          {...register('email', { required: '이메일을 입력해주세요' })}
        />

        <TextField
          type="password"
          label="password"
          helper={errors.password?.message}
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            minLength: { value: 6, message: '최소 6자 이상 가능합니다' },
            maxLength: { value: 15, message: '최대 15자 까지만 가능합니다' },
          })}
        />

        <TextField
          label="name"
          helper={errors.name?.message}
          {...register('name', { required: '이름을 입력해주세요' })}
        />

        <Button text="Signup" className="filled-brand-1" />
      </form>
    </>
  );
}
