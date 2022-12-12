import {useState, useCallback} from "react";
import ButtonComponent from "./button.component";
import TitleComponent from "./title.component";

const Register = () => {

    const [clickCount, setClickedCount] = useState(0);
    const [googleClickCount, setGoogleClickedCount] = useState(0);

    const incrementCount = useCallback(() => {
        console.log('incrementCount register count', clickCount);
        setClickedCount(clickCount + 1);
    }, [clickCount]); // manually handle dependency

    const googleIncrementCount = useCallback(() => {
        console.log('googleIncrementCount register count', googleClickCount);
        setGoogleClickedCount((prev) => prev + 1); // dependence handle by react
    }, []);

    return(
        <div>
            <TitleComponent title="Register"/>
            {
                clickCount || googleClickCount > 3 ? <p>Too many attempt</p> : ''
            }

            {
                /*
                    co relation ?
                    one button component click both load problem
                */
            }
            <div>
                <ButtonComponent
                    buttonCount={clickCount}
                    buttonName={"Facebook"}
                    handleBtnClick={incrementCount}
                />

                <ButtonComponent
                    buttonCount={googleClickCount}
                    buttonName={"Google"}
                    handleBtnClick={googleIncrementCount}
                />
            </div>
        </div>

    )
}
export  default  Register;

// state change component re-render
// useCallback not working