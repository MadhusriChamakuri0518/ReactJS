import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: "hello ra battu"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message : "Bye ra battu"
    //     })
    // }

    

    // binding class property as arrow funtions
    clickHandler = () => {
        this.setState({
            message : " Bye ra battachaari"
        })
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* binding using bind keyword */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>   */}
                {/* using arrow funtion to bind */}
                {/* <button onClick={() => this.clickHandler()}>Click</button>   */}
                {/* binding in the constructor */}
                <button onClick={this.clickHandler}>Click</button>  
            </div>
        );
    }
}

export default EventBind;