import { useState } from "react";

export default function RegisterForm() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Submit !!!');
    }

    return (
        <>
        <h3>Inscription</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='input-email'>Email : </label>
                <input id='input-email' type='text'
                    value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
                <label htmlFor='input-msg'>Message : </label>
                <textarea id='input-msg'
                    value={message} onChange={(event) => setMessage(event.target.value)} />
            </div>
            <div>
                <button type='submit'>Valider</button>
            </div>
        </form>
        </>
    )
};