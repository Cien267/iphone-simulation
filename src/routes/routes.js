import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../component/App';
import ErrorPage from '../component/ErrorPage/ErrorPage';
import Calculator from "../component/Layouts/Content/Calculator/Calculator";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "calculator",
    element: <Calculator/>,
    errorElement: <ErrorPage />,
  },
]);
