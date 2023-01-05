import { useState } from 'react';
import {
  createAuthoUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';
import './sign-up-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const SignUpForm = () => {
  const defaultValue = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultValue);
  const { displayName, email, password, confirmPassword } = formFields;

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetValues = () => {
    return setFormFields(defaultValue);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords Do Not Match');
      return;
    }
    try {
      const { user } = await createAuthoUserWithEmailandPassword(
        email,
        password
      );

      resetValues();

      createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      console.log(`Could not fetch ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <h2>I do not have an account</h2>
      <span>Sign up with your email</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          required
          label="Display Name"
          type="text"
          onChange={handlerChange}
          name="displayName"
          value={displayName}
        ></FormInput>

        <FormInput
          required
          label="E-mail"
          type="email"
          onChange={handlerChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          required
          label="Password"
          type="password"
          onChange={handlerChange}
          name="password"
          value={password}
        ></FormInput>

        <FormInput
          required
          label="Confirm Password"
          type="password"
          onChange={handlerChange}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
