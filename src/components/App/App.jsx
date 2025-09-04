import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  ErrorComponent,
  Loader,
} from '../StatusIndicators/StatusIndicators';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';
import { selectIsRefreshing } from '../../redux/contacts/selectors';
import { refreshUser } from '../../redux/auth/operations';

function App() {
  const dispatch = useDispatch();
  const iRefreshing = useSelector(selectIsRefreshing);


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorComponent />}
      {!loading && !error && (
        <div>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      )}
    </div>
  );
}

export default App;
