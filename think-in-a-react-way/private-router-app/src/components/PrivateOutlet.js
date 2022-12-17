import useAuth from "../hocks/useAuth";
import {Outlet, Navigate} from "react-router-dom";

export default function PrivateOutlet() {
    const auth = useAuth();
    return auth ? <Outlet/> : <Navigate to="/login"/>;
    // Outlet receive dashboard component
};