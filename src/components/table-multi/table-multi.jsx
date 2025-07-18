import { useState } from "react";

export default function TableMulti({ multi = 2}) {

    //! Constante fixe !!!  
    // const tables = [1, 2];

    //! Variable d'état (State)
    const [tables, setTables] = useState([1, 2]);

    //? Event du bouton
    const handleNextLine = () => {
        
        console.log('Avant', tables);
        //! Modification d'une valeur avec une nouvelle valeur
        // setTables([1, 2, 3, 4, 5])

        //! Modification basé sur la valeur actuelle
        setTables(prevTables => [...prevTables, prevTables.length + 1]);

        console.log('Aprés', tables);
    }

    console.log('Rendu', tables);
    return (
        <>
        <ul>
            {tables.map(nb => <li key={nb}>{multi} x {nb} = {multi * nb}</li>)}
        </ul>
        <button onClick={handleNextLine}>Ajouter le suivant</button>
        </>
    );

}