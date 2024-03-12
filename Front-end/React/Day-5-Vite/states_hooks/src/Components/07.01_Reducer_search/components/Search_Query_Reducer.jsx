import { useEffect, useMemo, useReducer, useState } from 'react';

import { FetchDataUserQuery } from '../reducer/Action';
import { DataReducer, initialStateDATA } from '../reducer/Reducer';

export const Search_Query_Reducer = () => {
    const [state, dispatch] = useReducer(DataReducer, initialStateDATA);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const debouncedFetchData = debounce(async (query) => {
            try {
                await FetchDataUserQuery(query)(dispatch);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }, 300);

        debouncedFetchData(query);
    }, [query]);

    const filteredUsers = useMemo(() => {
        return state.DATA.filter(lang => {
            return (
                lang.title.toLowerCase().includes(query.toLowerCase().trim()) ||
                lang.age.toString() === query.trim()
            );
        });
    }, [state.DATA, query])

    const debounce = (func, delay) => {
        let timerId;
        return function (...args) {
            if (timerId) clearTimeout(timerId);
            timerId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };



    return (
        <>
            <h1>Search Query Reducer with Debounce</h1>
            <input
                type='text'
                placeholder='Search User'
                onChange={(e) => setQuery(e.target.value)}
            />
            {state.isLoading && <p>Loading...</p>}
            {state.isError && <p>Error fetching data</p>}
            {query && filteredUsers.length >= 0 ? (
                <ul>
                    {filteredUsers.map((userData) => (
                        <li key={userData.id}>{userData.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No users found for {query}</p>
            )}
        </>
    );
};
