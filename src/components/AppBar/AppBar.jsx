import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectIsRefreshing } from '../../redux/contacts/selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const iRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.container}>
      <Navigation />
      {!iRefreshing && <div> {isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
    </header>
  );
}
