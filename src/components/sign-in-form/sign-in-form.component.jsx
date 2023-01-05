import { LoggingWithEmailandPass } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const SignInForm = (props) => {
  const defaultValue = {
    email: '',
    password: '',
  };

  const [defaultState, setState] = useState(defaultValue);

  const { email, password } = defaultState;

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setState({ ...defaultState, [name]: value });
  };

  const resetValues = () => {
    setState(defaultValue);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await LoggingWithEmailandPass(email, password);
      console.log(response);
      resetValues();
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('incorrect password for email');
      } else if (error.code === 'auth/user-not-found') {
        alert('User not found');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Already Have an Account</h2>
      <span>Sign in with Email and Password</span>
      <form onSubmit={onSubmitHandler}>
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
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={props.onForward}>
            Google SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
