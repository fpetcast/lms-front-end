import {
    createBrowserRouter,
} from "react-router-dom";

import ProtectedRoute from "../components/Navigation/ProtectedRoute";
import Dashboard from "../views/Dashboard";
import Courses from "../views/Courses/Courses";
import Login from "../views/Auth/Login";
import CreateCourse from "../views/Courses/CreateCourse";



const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
      path: "/",
      element: <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>,
    },
    {
        path: "/courses",
        element: <ProtectedRoute><Courses></Courses></ProtectedRoute>,
    },
    {
        path: "/create-course",
        element: <ProtectedRoute><CreateCourse></CreateCourse></ProtectedRoute>,
    },
]);

export default router;