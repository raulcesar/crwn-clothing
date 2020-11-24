import './sign-up-form.scss';
import { Component } from 'react';
import FormInput from '@components/form-input/form-input';
import ZButton from '@components/z-button/z-button';
import { auth, createUserProfileDocument } from '@fbase/firebase-utils.js';

// import { signInWithGoogle } from '@fbase/firebase-utils.js';
class SignUpForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            errorMsg: null,
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            this.setState({ errorMsg: 'Passwords don\'t match' });
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState(
                {
                    errorMsg: null,
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            );
        } catch (err) {
            console.error(err);
        }
        // this.setState({ currentUser: null });

        // if (userAuth) {
        //     const userRef = await createUserProfileDocument(userAuth, {});
        //     userRef.onSnapshot(snapShot => {
        //         this.setState({
        //             currentUser: {
        //                 id: snapShot.id,
        //                 ...snapShot.data()
        //             }
        //         });
        //     });
        // }

    }

    handleChangeData = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render () {
        const { displayName, email, password, confirmPassword, errorMsg } = this.state;
        let errorMsgComp = null;
        if (errorMsg) {
            errorMsgComp = <div className='error-message'>{errorMsg}</div>;
        }
        return (
            <div className='sign-up'>
                <h2 className='title'>Sign me up sir!</h2>
                <span>Sign up with your email and password</span>
                {errorMsgComp}
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' autoComplete='name' label='Display Name' value={displayName} handleChange={this.handleChangeData} required />
                    <FormInput type='email' name='email' label='Email' autoComplete='email' value={email} handleChange={this.handleChangeData} required />
                    <FormInput type='password' label='Password' name='password' value={password} handleChange={this.handleChangeData} required />
                    <FormInput type='password' label='Confirm Password' name='confirmPassword' value={confirmPassword} handleChange={this.handleChangeData} required />

                    <div className='buttons'>
                        <ZButton type="submit" value="Submit Form" >Sign Up</ZButton>
                        {/* <ZButton isGoogleSignIn onClick={signInWithGoogle} >Sign in with Google</ZButton> */}

                    </div>
                </form>
            </div>
        );
    }

}
export default SignUpForm;
