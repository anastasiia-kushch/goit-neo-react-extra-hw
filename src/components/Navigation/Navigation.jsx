import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';

export default function Navigation() {
  const location = useLocation();

  const getLocation = (to) => {
    return to === location.pathname
      ? clsx(css.navItem, css.active)
      : css.navItem;
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.container}>
      <NavLink to="/" className={`${getLocation('/')}`}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={`${getLocation('/contacts')}`}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
