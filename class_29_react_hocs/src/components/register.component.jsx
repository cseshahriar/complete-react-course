import React, {useState} from "react";

import TitleComponent from "./title.component";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [clickCount, setClickedCount] = useState(0);

    const incrementCount = () => {
        setClickedCount(clickCount + 1);
        if(clickCount < 3) {
            navigate("/register");
        }
        console.log('register count', clickCount);
    }
    return(
        <div>
            <TitleComponent title="Register"/>
            {
                clickCount > 3 ? <p>Too many attempt</p>: <button className="btn btn-primary" onClick={incrementCount}>Register</button>
            }
            <h4 className="mt-3">Click Count {clickCount}</h4>
        </div>
    )
}
export  default  Register;