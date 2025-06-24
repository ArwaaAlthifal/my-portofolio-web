import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const LoginForm = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@mail.com"
      ></InputForm>
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      ></InputForm>
      <Button
        type="submit"
        classname="bg-slate-700 w-full my-3"
      >Login</Button>
    </form>
  );
};

export default LoginForm;
