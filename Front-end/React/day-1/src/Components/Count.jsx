import React, { useState } from 'react'
import { Button, ButtonGroup, Typography } from "@mui/material"
const Count = () => {
    const [count, setCount] = useState(0);
    const HandelCountIncreass = () => {
        setCount(prevCount => prevCount + 1);
    }
    return (
        <>
            <Typography variant="overline">{count}</Typography>
            <ButtonGroup orientation="horizontal" variant="outlined" >
                <Button color="success" onClick={HandelCountIncreass}>+</Button>
                <Button color="error" onClick={() => { setCount(prevCount => prevCount - 1) }}>-</Button>
                <Button color="secondary" onClick={() => { setCount(0) }}>Reset</Button>
            </ButtonGroup>

        </>
    )
}

export default Count

