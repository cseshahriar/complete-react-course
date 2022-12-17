import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" className={ (navInfo) => navInfo.isActive ? classes.active : ''}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={ (navInfo) => navInfo.isActive ? classes.active : ''}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={ (navInfo) => navInfo.isActive ? classes.active : ''}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}