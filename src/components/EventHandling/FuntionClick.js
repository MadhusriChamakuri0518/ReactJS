import React from "react";

function FunctionClick() {
    function clickHandler(){
        alert("Button Clicked")
    }


    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick