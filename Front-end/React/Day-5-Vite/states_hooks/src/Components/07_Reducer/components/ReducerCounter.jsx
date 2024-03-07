import { useReducer } from 'react';
import { initialStateCounter, Counterreducer } from '../reducer/Reducer';
import { incrementAction, decrementAction, resetAction } from '../reducer/Action';

export const ReducerCounter = () => {
    const [state, dispatch] = useReducer(Counterreducer, initialStateCounter);

    return (
        <div>
            <h1>Reducer Counter</h1>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch(incrementAction())}>Increment</button>
            <button onClick={() => dispatch(decrementAction(1))}>Decrement</button>
            <button onClick={() => dispatch(resetAction())}>Reset</button>
        </div>
    );
};

