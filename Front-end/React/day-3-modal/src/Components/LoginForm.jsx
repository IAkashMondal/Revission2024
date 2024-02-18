import React, { useState } from 'react';
import style from "../css/Modal.module.css"
function LoginForm({setModalStatus, modalStatus}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <form onSubmit={handleSubmit} className={style.formDiv}>
            <button
                onClick={() => {
                    setModalStatus(!modalStatus);
                }}
            >
                X
            </button>
            <label className={style.labelText}>
                Username:
                <input className={style.inputFiled}
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </label>
            <label className={style.labelText}>
                Password:
                <input className={style.inputFiled}
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </label>
            <button className={style.buttonDiv} type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
