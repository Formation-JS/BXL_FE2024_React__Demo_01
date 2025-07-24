/** @param {FormData} data  */
function choiceNumberAction(data) {
    
    // Le "FormData" est un type d'objet particulier
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData
    console.log('FormData : ', data);
    
    // Pour extraire ses données, il est possible
    // - D'utiliser la méthode "get"
    const username = data.get('username');
    const choiceNb = data.get('choice-number');
    console.log('Variable : ', username, choiceNb);

    // - De convertir son contenu en objet via la méthode "Object.fromEntries(...)"
    console.log('Content : ', Object.fromEntries(data.entries()));  
}

export default function NumberForm() {

    // L'attribut "action" envoi automatiquement les données sous forme de "FormData"
    return (
        <form action={choiceNumberAction}>
            <div>
                <label htmlFor="input-name">Nom : </label>
                <input id="input-name" type="text" name="username" />
            </div>
            <div>
                <label htmlFor="input-number">Nombre : </label>
                <input id="input-number" type="text" name="choice-number" />
            </div>
            <div>
                <button type="submit">Valider !</button>
            </div>
        </form>
    )
}