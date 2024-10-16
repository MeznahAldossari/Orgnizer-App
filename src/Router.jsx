import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import AddEvents from "./pages/AddEvents";
import EventInfo from "./pages/EventInfo";

import AddEvent from './pages/AddEvent'
import StudentProfile from './pages/StudentProfile'
import Submissions from './pages/Submissions'
import DetailsCompanies from './pages/DetailsCompanies'
import Companies from './pages/Companies'

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CompanyDetails from "./components/CompanyDetails";
import EventData from "./components/EventData";

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
          path: "/companyInfo/:id",
          element: <CompanyDetails />,
        },
        {
          path: "/AddEvents",
          element: <AddEvents />,
        //   errorElement:<ErrorPage/>
        },
        {
          path: `/EventInfo/:eventId`,
          element: <EventData />,
        //   errorElement:<ErrorPage/>
        },
        {
            path: "/StudentProfile/:studentId",
            element: <StudentProfile />,
        },
        {
            path: "/Submissions",
            element: <Submissions />,
        },
        {
            path: "/DetailsCompanies/",
            element: <DetailsCompanies />,
        },
        {
            path: "/Companies/:id",
            element: <Companies />,
        },
        
     
      ]);
    return(
        
        <RouterProvider router={router} />
    );
}
export default Router