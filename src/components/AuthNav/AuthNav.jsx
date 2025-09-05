import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

export default function AuthNav() {
  const location = useLocation();

  const getLocation = (to) => {
    return to === location.pathname
      ? clsx(css.navItem, css.active)
      : css.navItem;
  };
  return (
    <div className={css.container}>
      <NavLink to="/register" className={`${getLocation('/register')}`}>
        Register
      </NavLink>
      <NavLink to="/login" className={`${getLocation('/login')}`}>
        Log In
      </NavLink>
    </div>
  );
}
