import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const RegisterForm = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        name="fullname"
        type="text"
        placeholder="John Andrea"
      ></InputForm>
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
      <InputForm
        label="Confirm Password"
        name="confirm_password"
        type="password"
        placeholder="********"
      ></InputForm>
      <Button
        type="submit"
        classname="bg-slate-700 w-full my-3"
      >Register</Button>
    </form>
  );
};

export default RegisterForm;
