import { useRouteError } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="oop">Oops!</div>
      <div>Sorry, an unexpected error has occurred.</div>
      <div>
        <i>{error.statusText || error.message}</i>
      </div>
    </div>
  );
}