import { useState } from 'react'

const Counter = () => {
    const [count, setCounter] = useState(0);
    const handelIncrease = () => {
        setCounter(count + 1)
    }
    return (
        <>
            <h1>Counter using useState Hook</h1>
            <h2>{`Count:  ${count}`}</h2>
            <button onClick={handelIncrease}>Increase</button>
            <button onClick={() => { setCounter(count - 1) }}>Decrease</button>
            <button onClick={() => { setCounter(prev => prev * 2) }}>Double</button>
        </>
    )
}

export default Counter