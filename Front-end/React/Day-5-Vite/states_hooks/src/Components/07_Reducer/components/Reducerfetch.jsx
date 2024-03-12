import { useEffect, useReducer, useState } from 'react';
import { languageReducer, initialStateLanguage } from '../reducer/Reducer';
import { FetchDataLang, GetLang } from '../reducer/Action';

export const ReducerFetch = () => {
    const [stateData, dispatch] = useReducer(languageReducer, initialStateLanguage);
    const [fetchbtnView, setFetchBtnview] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await FetchDataLang()(dispatch);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const Handelfetch = () => {
        setFetchBtnview(!fetchbtnView)
        GetLang()(dispatch);
    }
    return (
        <>
            <h1>Reducer Fetching</h1>
            <table>
                <thead>
                    <tr>
                        <th>With Use effect</th>
                        <th>
                            <>
                                <h3>With Button Event</h3>
                                <button onClick={Handelfetch}>Fetch</button>
                            </>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                {stateData.isLoading ? (
                                    <p>Loading...</p>
                                ) : stateData.isError ? (
                                    <p>Error fetching data</p>
                                ) : (
                                    <div>
                                        <h2>Languages:</h2>
                                        <ul>
                                            {stateData.language.map((lang) => (
                                                <li key={lang.id}>{`${lang.title} - ${lang.age}`}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </td>
                        {/* 2nd component */}
                        <td>
                            <>
                                {
                                    fetchbtnView ? <div>
                                        {stateData.isLoading ? (
                                            <p>Loading...</p>
                                        ) : stateData.isError ? (
                                            <p>Error fetching data</p>
                                        ) : (
                                            <div>
                                                <h2>Languages:</h2>
                                                <ul>
                                                    {stateData.language.map((lang) => (
                                                        <li key={lang.id}>{`${lang.title} - ${lang.age}`}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                        : ""
                                }</>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ReducerFetch;
