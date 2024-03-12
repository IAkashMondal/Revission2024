import { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
    const handelincrement = () => {
        setcount((prev) => prev + 1);
    }
    const handelDectement = () => {
        setcount((prev) => prev - 1);
    }
    return (
        <div>
            <h1>Counter</h1>
            <h3>count:{count}</h3>
            <button className='increment' onClick={handelincrement}>+</button>
            <button className='decrement' onClick={handelDectement}>-</button>
        </div>
    )
}

export default Counter
