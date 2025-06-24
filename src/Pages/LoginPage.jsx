import { Link } from "react-router-dom";
import LoginForm from "../Components/Fragments/LoginForm";
import AuthLayouts from "../Components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <div className="flex">
      <div className="min-h-screen w-1/3 flex items-center justify-center">
        <AuthLayouts title="Login" type="login">
          <LoginForm />
        </AuthLayouts>
      </div>
      <div className="min-h-screen w-2/3 bg-gradient-to-tl from-slate-950 via-slate-800 to-slate-950 flex items-center justify-center text-center">
        <div>
          <h1 className="text-white font-bold text-4xl mb-3">Login Page</h1>
          <h1 className="text-white font-light">
            This login page cannot be used, this page is just an example
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
