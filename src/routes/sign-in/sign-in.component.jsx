import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './sign-in.styles.scss';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignInForm onForward={logGoogleUser} />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
