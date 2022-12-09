import {
    createBrowserRouter,
} from "react-router-dom";

import Dashboard from "../views/Dashboard";
import Courses from "../views/Courses/Courses";
import CreateCourse from "../views/Courses/CreateCourse";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard>,
    },
    {
        path: "/courses",
        element: <Courses></Courses>,
    },
    {
        path: "/create-course",
        element: <CreateCourse></CreateCourse>,
    },
]);

export default router;