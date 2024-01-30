import React from 'react'

const EventHandeling01 = () => {
    const DemoAlert = () => {
        alert("ckicked");
    }
    return (
        <div>
            <h1>Event handleng</h1>
            {/* //1 it will allow and show alert when we will clik on the button; */}
            <button onClick={DemoAlert}>click me with handel</button>
            {/* //2 it will allow and show alert when we will clik on the button; */}
            <button onClick={() => { alert("clixck me i have own fun") }} >clixck me i have own fun</button>
            {/* { i will auto trigger the button whene page will be reloaded */}
             {/* <button onClick={DemoAlert()}></button>   */}
        </div>
    )
}

export default EventHandeling01

