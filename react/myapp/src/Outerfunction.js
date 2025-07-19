function Innerfunction() {
    return(
        <div>
            <h1>inner function called</h1>
        </div>
    )
}

function Outerfunction() {
    return (
        <div>
            <Innerfunction/>
            <h1>outerfunction called</h1>
        </div>
    )
}

export default Outerfunction