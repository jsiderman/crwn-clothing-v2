import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sign-in/sign-in.component';
import Button from '../../components/button/button.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
