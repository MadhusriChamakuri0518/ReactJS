import React, { Component } from 'react';

class UserGreeting extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }

    render() {

        // using short circuit approach
        // return this.state.isLoggedIn && <div>hello battu</div>

        // using ternary operation
        return (this.state.isLoggedIn) ? (
        <div>Hi Madhusri</div>
        ):(
        <div>Hello user</div>
        )


        // let message 
        // if (this.state.isLoggedIn){
        //     message = <div>Ra raa battu raa</div>
        // } else {
        //     message = <div>kaun ey re thu</div>
        // }

        // return <div>{message}</div>



        // In jsx, only single return should be passed, so we are using better approach above this code
        // if (this.state.isLoggedIn) {
        //     return <div>Raa raa battu raa ... ne gurinche matladukuntunam</div>
        // } else {
        //     return <div>Ramma kotha pakshi</div>
        // }
    }
}

export default UserGreeting;