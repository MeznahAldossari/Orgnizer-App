import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import AddEvent from './pages/AddEvent'


function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        //   errorElement:<ErrorPage/>
        },
        {
            path: "/AddEvent",
            element: <AddEvent />,
        },
      ]);
    return(
        
        <RouterProvider router={router} />
    );
}
export default Router