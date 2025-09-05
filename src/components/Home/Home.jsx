import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1>{`Welcome to PhoneBook's app!`}</h1>
      <ul className={css.list}>
        <li>effortlessly manage your contact list</li>
        <li>alphabetically sorted for quick access</li>
        <li>edit and delete contacts with ease</li>
      </ul>
      <p>Streamline your contact management and simplify your life!</p>
    </div>
  );
}
