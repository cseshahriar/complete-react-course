import React from 'react';
import useAuth from "../hocks/useAuth";
import { Navigate} from "react-router-dom";

export default function PrivateRoute({children}) {
    const auth = useAuth();
    return  auth ? children : <Navigate to="/login" /> ;
};
