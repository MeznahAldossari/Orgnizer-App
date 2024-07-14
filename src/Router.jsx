import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home'

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        //   errorElement:<ErrorPage/>
        },
      ]);
    return(
        
        <RouterProvider router={router} />
    );
}
export default Router