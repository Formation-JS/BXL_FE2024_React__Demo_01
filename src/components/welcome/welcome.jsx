
export default function Welcome({firstName, lastName = 'Smith'}) {

    return (
        <p>Bienvenue {firstName} {lastName}</p>
    );
}
