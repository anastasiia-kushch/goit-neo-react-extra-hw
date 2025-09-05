import toast from 'react-hot-toast';
import { RiseLoader } from 'react-spinners';
import css from './StatusIndicators.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <RiseLoader
        color={'#333583ff'}
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export const ErrorMessage = () => toast.error('Oops! Something went wrong...');

export const ErrorComponent = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Oops! Something went wrong...</p>
      <button onClick={handleReload} className={css.button}>
        Reload the page
      </button>
    </div>
  );
};
