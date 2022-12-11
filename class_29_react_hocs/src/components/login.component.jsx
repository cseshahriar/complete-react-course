import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import TitleComponent from "./title.component";

const LoginComponent = () => {
    const navigate = useNavigate();
    const [clickCount, setClickedCount] = useState(0);
    const incrementCount = () => {
        setClickedCount(clickCount + 1);
        if(clickCount < 3) {
            navigate("/login");
        }
        console.log('login count', clickCount);
    }

    return(
        <div>
            <TitleComponent title="Login Component"/>
            {
                clickCount > 3 ? <p>Too many attempt</p> : <button className="btn btn-primary" onClick={incrementCount}>Login</button>
            }

        </div>
    )
}
export  default  LoginComponent;