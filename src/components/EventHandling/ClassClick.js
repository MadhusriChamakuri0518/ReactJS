import React, {Component} from "react";
import { Formik } from "formik";

class ClassClick extends Component{

    clickHandler(){
        alert("Button clicked")
    }

    render() {
    return(
            <div>
                <button onClick={this.clickHandler}> Click me </button>
            </div>
        )
    }
}

export default ClassClick