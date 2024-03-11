import { useEffect, useReducer, useState } from 'react';

import { FetchDataUser } from '../reducer/Action'; 
import { DataReducer, initialStateDATA } from '../reducer/Reducer';

export const Search_Query_Reducer = () => {
    const [state, dispatch] = useReducer(DataReducer, initialStateDATA);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                await FetchDataUser()(dispatch); // Call without query if not server-side filtering
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Fetch data on component mount (or adjust as needed)

    const filteredUsers = state.DATA.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <h1>Search Query Reducer</h1>
            <input
                type='text'
                placeholder='Search User'
                onChange={(e) => setQuery(e.target.value)}
            />
            {state.isLoading && <p>Loading...</p>}
            {state.isError && <p>Error fetching data</p>}
            {filteredUsers.length > 0 ? (
                <ul>
                    {filteredUsers.map((userData) => (
                        <li key={userData.id}>{userData.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No users found for {query}</p>
            )}
        </>
    );
};
