import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "../components/Button";
import Container from "../components/Container";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => void;
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          {errors?.email && <span>{errors.email.message}</span>}
          <input type="text" id="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          {errors?.password && <span>{errors.password.message}</span>}
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button type="submit" loading={isSubmitting}>
          Log in
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
