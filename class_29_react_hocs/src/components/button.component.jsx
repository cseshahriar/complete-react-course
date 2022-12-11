import React from "react";

const ButtonComponent = ({handleBtnClick, buttonCount, buttonName}) => {
    console.log(`${buttonName} button component loaded`);

    return(
        <>
            <button type="button" className="btn btn-primary" onClick={handleBtnClick}>{buttonName}</button>
            <p>{buttonName} clicked count {buttonCount}</p>
        </>
    )
}

export default  ButtonComponent;