import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-black">
      <h1 className="font-bold text-4xl mb-5">Error 404!</h1>
      <p className="font-light">Sorry, an unexpected error has occurred.</p>
      <p className="font-semibold">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
