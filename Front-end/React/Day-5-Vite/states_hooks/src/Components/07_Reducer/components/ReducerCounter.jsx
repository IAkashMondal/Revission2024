import { useReducer } from 'react'
import { reducer } from '../reducer/Reducer'
import { decrementAction, incrementAction, resetAction } from '../reducer/Action'
const intialstateCounter = {
    count: 0
}
const ReducerCounter = () => {
    const [ReducerState, distpath] = useReducer(reducer, intialstateCounter)
    return (
        <div>
            <h1>ReducerCounter</h1>
            <h3>Count: {ReducerState.reducer_count}</h3>
            <button onClick={distpath(incrementAction())}>+</button>
            <button onClick={distpath(decrementAction(1))}>-</button>
            <button onClick={distpath(resetAction())}>reset</button>
        </div>
    )
}

export default ReducerCounter