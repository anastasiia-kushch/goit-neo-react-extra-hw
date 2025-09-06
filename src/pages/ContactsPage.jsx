import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectLoading } from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import {
    Loader,
    ErrorComponent,
} from '../components/StatusIndicators/StatusIndicators';
import css from '../components/App/App.module.css';

export default function Conctacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorComponent />}
      {!loading && !error && (
        <div className={css.container}>
          <div className={css.topContainer}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
          </div>
          <ContactList />
        </div>
      )}
    </div>
  );
}
