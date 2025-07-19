import React from "react";
class StateEx extends React.Component{
    constructor(){
        super();
        this.state = {
            word: "hello world!"
        }
    }
    // create a method for call value
    handleEvent = () => {
        this.setState(
            {
                word:"welcome"
            }
        )
    }
    render(){
        return(
            <>
                <button onClick={this.handleEvent}>click</button>
                <p>{this.state.word}</p>
            </>
        )
    }
}

export default StateEx