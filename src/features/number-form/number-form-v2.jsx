import { useActionState } from "react";

/** @param {FormData} data  */
async function choiceNumberAction(prevState, data) {
    // NB: Lorsqu'une action est utiliser avec "useActionState", son premier argument est le state précédent

    const username = data.get('username');
    const choiceNb = data.get('choiceNumber');
    console.log('Données reçues : ', username, choiceNb);

    // Une action lier à un "useActionState" doit renvoyé une valeur de state ou générer une erreur
    if (parseFloat(choiceNb) < 0) {
        return {
            data: Object.fromEntries(data.entries()),
            message: 'Erreur, le nombre est negatif !'
        };
    }

    return {
        data: null,
        message: 'Merci !'
    };
}

export default function NumberForm() {

    // Le Hook "useActionState" permet de lier une action et un state
    const [state, handleForm, isPending] = useActionState(choiceNumberAction, { message: null, data: null });

    return (
        <form action={handleForm}>
            <div>
                <label htmlFor="input-name">Nom : </label>
                <input id="input-name" type="text" name="username" defaultValue={state.data?.username} />
            </div>
            <div>
                <label htmlFor="input-number">Nombre : </label>
                <input id="input-number" type="text" name="choiceNumber" defaultValue={state.data?.choiceNumber} />
            </div>
            <div>
                <button type="submit" disabled={isPending}>Valider</button>
                {' '}
                {state.message && (
                    <span>{state.message}</span>
                )}
            </div>
        </form>
    );
}