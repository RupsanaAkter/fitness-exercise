import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import ExerciseDetails from "../../pages/Home/Home/ExerciseDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/exercise/:id',
                element:<ExerciseDetails></ExerciseDetails>
            }
        ]
    }
])
{/* <Route path="/exercise/:id" element={<ExerciseDetail />} /> */}
export default router;