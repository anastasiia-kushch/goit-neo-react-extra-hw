import RegisterForm from '../components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/auth/selectors';
import {
  Loader,
  ErrorComponent,
} from '../components/StatusIndicators/StatusIndicators';
import css from '../components/App/App.module.css';
import clsx from 'clsx';

export default function RegistrationPage() {
  const loading = useSelector(selectError);
  const error = useSelector(selectLoading);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorComponent />}
      {!loading && !error && (
        <div className={clsx(css.container, css.authContainer)}>
          <h1>Register your account</h1>
          <RegisterForm />
        </div>
      )}
    </div>
  );
}
