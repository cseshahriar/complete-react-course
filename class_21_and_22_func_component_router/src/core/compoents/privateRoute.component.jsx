import authentication from '../service/authentication';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const auth = authentication();
    return auth ? children : <Navigate to="/login" />
}

export default PrivateRoute;
