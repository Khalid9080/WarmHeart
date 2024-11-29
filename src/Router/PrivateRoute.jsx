import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location=useLocation();
    // console.log(location)

    // If authentication state is still loading, show the loading spinner
    if (loading) {
        return <Loading />; // Loading spinner during authentication check
    }

    // If user is authenticated, render the children (i.e., protected page)
    if (user && user?.email) {
        return children;
    }

    // If not authenticated, redirect to login page
    return <Navigate state={location.pathname} to='/login' />;
};

export default PrivateRoute;
