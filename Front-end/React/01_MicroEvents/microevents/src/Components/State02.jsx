import React from 'react'
import { useState } from 'react'

const State02 = () => {
    const [state, setState] = useState("i,m old state");
    const [count, setCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const HandelSetState = () => {
        setState("I,m updated data");
    }
    const Handelincrease = () => {
        if (count < 5) {
            setCount(count + 1);
            setErrorMessage(null);
        }
        else {
            setErrorMessage("max lit 5")
        }
    }
    return (
        <div>
            <h1>State</h1>
            <h1>Data:{state}</h1>
            <h1>{count < 5 ? count : errorMessage}</h1>
            <button onClick={HandelSetState}>Update Button</button>
            <button onClick={Handelincrease}> +</button>
            <button onClick={() => { setCount(count - 1) }}>-</button>
            <button onClick={() => { setCount(0) }}>Resest</button>
        </div>
    )
}

export default State02
