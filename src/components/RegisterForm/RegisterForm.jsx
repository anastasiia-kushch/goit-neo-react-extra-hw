import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  password: Yup.string().trim().min(4, 'Too short!').required('Required'),
  email: Yup.string().trim().email().required('Required'),
});

export default function RegisterForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label htmlFor={nameFieldId}>Username</label>
        <Field name="name" id={nameFieldId} className={css.input}></Field>
        <label htmlFor={emailFieldId}>Email</label>
        <Field name="email" id={emailFieldId} className={css.input}></Field>
        <label htmlFor={passwordFieldId}>Password</label>
        <Field
          name="password"
          id={passwordFieldId}
          type="password"
          className={css.input}
        ></Field>
        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
