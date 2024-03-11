import { useState } from 'react'
import { language } from "../../../data.json"
const Curd = () => {
    // const tableBorder css -------------->
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '80%'
    };

    const thStyle = {
        backgroundColor: '#f2f2f2',
        border: '1px solid #dddddd',
        padding: '8px',
        textAlign: 'center',
        width: '20%'
    };

    const tdStyle = {
        border: '1px solid #dddddd',
        padding: '8px',
        textAlign: 'center',
        width: '20%',
    };
    const tdHoverStyle = {
        backgroundColor: '#f2f2f2'
    };

    //state mangements----------------------------------------------------------------------->
    const [lang, setLang] = useState(language);
    const handelupdateTitle = (id) => {
        setLang(
            lang.map((item) => item.id === id ? { ...item, title: "new data" } : item)

        )
    }
    const handelDelete = (itemiId) => {
        setLang(
            lang.filter((item) =>
                item.id !== itemiId)
        )
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>CURD APP JSON DATA</h1>
            <div>
                <table style={tableStyle}>
                    <thead>
                        <tr >
                            <th style={thStyle}>IDS</th>
                            <th style={thStyle}>NAME</th>
                            <th style={thStyle}>AGE</th>
                            <th style={thStyle}></th>
                            <th style={thStyle}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {lang && lang.map((item) =>
                            <tr key={item.id}>
                                <td style={tdStyle}>{item.id}</td>
                                <td style={tdStyle}>{item.title}</td>
                                <td style={tdStyle}>{item.age}</td>
                                <td style={tdStyle} ><button onClick={() => { handelupdateTitle(item.id) }} style={tdHoverStyle}>Update</button></td>
                                <td style={tdStyle} ><button onClick={() => { handelDelete(item.id) }} style={tdHoverStyle}>delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Curd
    ;