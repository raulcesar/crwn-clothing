// import { Component } from 'react';
import './signin-login-page.scss';
import SignInForm from '@components/sign-in-form/sign-in-form';
import SignUpForm from '@components/sign-up-form/sign-up-form';

const SigninLoginPage = () => (

    <div className='signin-login'>
        <SignInForm className='signin-login' />
        <SignUpForm  />
    </div>

    // <div className='signin-login'>Sign In</div>
);

export default SigninLoginPage;
