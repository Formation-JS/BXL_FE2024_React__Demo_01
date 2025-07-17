function PeopleTableHead() {
    return (
        <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Age</th>
            </tr>
        </thead>
    );
};

function PeopleTableRow({ firstName, lastName, age }) {

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName?.toUpperCase()}</td>
            <td>{age} ans</td>
        </tr>
    );
}

export default function PeopleTable({ people = [] }) {

    return (
        <table>
            <PeopleTableHead />
            <tbody>
                {people.map(
                    person => <PeopleTableRow key={person.id} {...person} />
                )}
            </tbody>
        </table>
    );
}