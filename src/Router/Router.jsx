import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../Components/Home';
import Donation from '../Components/Donation';
import How_to_help from '../Components/How_to_help';
import Dashboard from '../Components/Dashboard';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import Update from '../Components/Update'; // Import Update Component
import PrivateRoute from './PrivateRoute';
import Donation_Details from '../Components/Donation_Details';
import Error from "../Components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/donation_details',
        element: (
          <PrivateRoute>
            <Donation_Details></Donation_Details>
          </PrivateRoute>
        )
      },
      {
        path: '/how_to_help',
        element: <How_to_help></How_to_help>
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        )
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/update', // Add this route for profile update
        element: <Update></Update>
      },
      {
        path: '/error',
        element: <Error></Error>
      }
    ]
  }
]);

export default router;
