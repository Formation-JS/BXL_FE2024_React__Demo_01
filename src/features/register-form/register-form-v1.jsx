import { useState } from "react";

export default function RegisterForm() {

    const [allValues, setAllValues] = useState({
        email: '',
        message: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Submit !!!');
    }

    const handleInput = (event) => {
        console.log('Input ciblé :', event.target.name);
        console.log('Prochaine valeur :', event.target.value);
        
        const { name, value } = event.target;
        setAllValues(previousValues => ({
            ...previousValues, 
            [name]: value
        }));
    }

    return (
        <>
        <h3>Inscription</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='input-email'>Email : </label>
                <input id='input-email' type='text' name='email' 
                    value={allValues.email} onChange={handleInput} />
            </div>
            <div>
                <label htmlFor='input-msg'>Message : </label>
                <textarea id='input-msg' name='message'
                    value={allValues.message} onChange={handleInput} />
            </div>
            <div>
                <button type='submit'>Valider</button>
            </div>
        </form>
        </>
    )
};