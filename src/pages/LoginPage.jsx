import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/auth/selectors';
import {
  Loader,
  ErrorComponent,
} from '../components/StatusIndicators/StatusIndicators';
import LoginForm from '../components/LoginForm/LoginForm';
import css from '../components/App/App.module.css';
import clsx from 'clsx';

export default function LoginPage() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorComponent />}
      {!loading && !error && (
        <div className={clsx(css.container, css.authContainer)}>
          <h1>Log in</h1>
          <LoginForm />
        </div>
      )}
    </div>
  );
}
