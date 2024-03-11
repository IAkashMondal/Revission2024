import { useEffect, useState } from "react"

export const ApiFetch = () => {
    const [DataTransfer, setDataTransfer] = useState([]);
    useEffect(() => {
        const Fetching = async () => {
            try {
                const response = await fetch("http://localhost:8090/data")
                const data = await response.json();
                setDataTransfer(data);

            } catch (e) {
                console.log(e);
            }
        }
        Fetching();
    }, [])
    return (
        <div>
            <h1>UseEffect Fetching</h1>
            <div>{DataTransfer && DataTransfer.map((item) =>
                <div key={item.id}>
                    <h6>{item.id}</h6>
                    <div>
                        {item.fruits.map((det) => <h6 key={det.name}>{`${det.name}- ${det.price}- ${det.quantity}`}</h6>)}
                    </div>
                    <h6>{item.TotalPrice}</h6>
                </div>
            )}
            </div>
        </div>
    )
}


