import './sign-in-form.scss';
import { Component } from 'react';
import FormInput from '@components/form-input/form-input';
import ZButton from '@components/z-button/z-button';
import { signInWithGoogle } from '@fbase/firebase-utils.js';
class SignInForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChangeData = event => {
        const { value, name } = event.target;
        console.log(`${name} now: ${value}`);
        this.setState({ [name]: value });
    }

    render () {
        return (
            <div className='sign-in'>
                <h2 className='title'>Sign In (existing users)</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label='Email' value={this.state.email} handleChange={this.handleChangeData} required />
                    <FormInput type='password' label='Password' name='password' value={this.state.password} handleChange={this.handleChangeData} required />

                    <div className='buttons'>
                        <ZButton type="submit" value="Submit Form" >Sign in</ZButton>
                        <ZButton isGoogleSignIn onClick={signInWithGoogle} >Sign in with Google</ZButton>

                    </div>
                </form>
            </div>
        );
    }

}
export default SignInForm;
