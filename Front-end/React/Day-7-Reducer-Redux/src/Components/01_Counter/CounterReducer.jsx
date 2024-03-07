import { useReducer } from 'react'
import { reducer } from '../../Reducer/reducer';
import { DecrementAction, IncrementAction, ResetAction } from '../../Reducer/action';
const Initialstate = {
    count: 0
}
export const CounterReducer = () => {
    const [count, dispatch] = useReducer(reducer, Initialstate);
    return (
        <div><h1>counter</h1>
            <h5>{count.count}</h5>
            <button onClick={() => dispatch(IncrementAction())}>+</button>
            <button onClick={() => dispatch(DecrementAction(1))}>-</button>
            <button onClick={() => dispatch(ResetAction())}>Reset</button>
        </div>
    )
}
