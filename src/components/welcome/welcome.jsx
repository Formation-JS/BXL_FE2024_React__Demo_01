import style from './welcome.module.css';

export default function Welcome({ firstName, lastName = 'Smith' }) {

    return (
        <p>Bienvenue <span className={style.person}>{firstName} {lastName}</span> !</p>
    );
}
