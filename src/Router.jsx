import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import AddEvent from './pages/AddEvent'
import StudentProfile from './pages/StudentProfile'
import Submissions from './pages/Submissions'
import DetailsCompanies from './pages/DetailsCompanies'
import Companies from './pages/Companies'

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
        {
            path: "/StudentProfile",
            element: <StudentProfile />,
        },
        {
            path: "/Submissions",
            element: <Submissions />,
        },
        {
            path: "/DetailsCompanies",
            element: <DetailsCompanies />,
        },
        {
            path: "/Companies",
            element: <Companies />,
        },
      ]);
    return(
        
        <RouterProvider router={router} />
    );
}
export default Router