import { useRouteError, isRouteErrorResponse, Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Oops! Something went wrong.</h1>
      {isRouteErrorResponse(error) ? (
        <p className="text-red-500">
          Error {error.status}: {error.statusText}
        </p>
      ) : (
        <p className="text-red-500">Unknown error occurred.</p>
      )}
      <Link to={"/"} className="hover:underline hover:underline-offset-4">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
