import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { changeTextColor } from "./themeSlice";

const Theme = () => {
    const [color, setColor] = useState("white");

    // call reducer action function
    const dispatch = useDispatch()

    return (
        <div>
            <input className="textbox" type="text" onChange={(e) => setColor(e.target.value) } />
            <button className='button' onClick={() => {dispatch(changeTextColor(color)) }}>Change Text Color</button>
            <p>{color}</p>
        </div>
    );
};

export default Theme;