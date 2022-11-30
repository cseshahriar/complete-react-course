import { useState } from "react";

const ClickHoc = (IncomingComponent) => {
    // received a component and modify and then return it
    const OutgoingComponent = () => {
        const [clickCount, setClickCount] = useState(0);
    
        const onClicked = () => {
            console.log('click count clicked');
            setClickCount(clickCount + 1);
        }

        return(
            <div>
                {
                    (clickCount > 3) ? <h1>Too many attempt</h1> : <IncomingComponent clickCount={clickCount} onClicked={onClicked}/>
                }
            </div>
        )
    }

    return OutgoingComponent;
}

export default ClickHoc;