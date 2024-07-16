import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import AddEvents from "./components/AddEvents";
import EventDetails from "./components/EventDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CompanyDetails from "./components/CompanyDetails";

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/companyInfo",
          element: <CompanyDetails />,
        },
      ]);
    return(
        
        <RouterProvider router={router} />
    );
}
export default Router