import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import AddEvents from "./pages/AddEvents";
import EventInfo from "./pages/EventInfo";

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        //   errorElement:<ErrorPage/>
        },
        {
          path: "/AddEvents",
          element: <AddEvents />,
        //   errorElement:<ErrorPage/>
        },
        {
          path: "/EventInfo",
          element: <EventInfo />,
        //   errorElement:<ErrorPage/>
        },
      ]);
    return(
        
        <RouterProvider router={router} />
    );
}
export default Router