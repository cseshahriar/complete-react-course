import authentication from '../service/authentication';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateOutlet = () => {
    const auth = authentication();
    return auth ? <Outlet/> : <Navigate to="/login" />
}

export default PrivateOutlet;
