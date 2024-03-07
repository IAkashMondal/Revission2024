import { useEffect, useReducer } from 'react';
import { fetchData } from '../reducer/Action';
import { languageReducer, initialStateLanguage } from '../reducer/Reducer';

export const ReducerFetch = () => {
    const [state, dispatch] = useReducer(languageReducer, initialStateLanguage);

    useEffect(() => {
        dispatch(fetchData());
        console.log(state,"fetch")
    }, [dispatch,state]);

    return (
        <div>
            <h1>Reducer Fetching</h1>
            {state.isLoading ? (
                <p>Loading...</p>
            ) : state.isError ? (
                <p>Error fetching data</p>
            ) : (
                <div>
                    <h2>Languages:</h2>
                    <ul>
                        {state.language.map((lang) => (
                            <li key={lang.id}>{`${lang.title} - ${lang.age}`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
