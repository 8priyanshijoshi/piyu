import React from "react";
class StateEx2 extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState((set) => (
            {
                count: set.count + 1
            }
        ))
    }
    decrement = () => {
        this.setState((set) => (
            {
                count: set.count - 1
            }
        ))
    }


render(){
    return(
        <>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <h1>{this.state.count}</h1>
        </>
    )
}
}

export default StateEx2
