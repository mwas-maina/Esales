import React, { Component } from 'react';
import FormInput from '../forminput/form-input.component';
import  "./signin.styles.scss";
import AuthButton from '../custom-buttons/submit-buttons/customSubmitButton.component';
import UserAlt from '../SVGS/User.svg';
import { Link } from 'react-router-dom';




export class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">
                <form className="signin">
                    <div className="text-highlight">
                        <UserAlt />
                        
                        <h2>Sign in</h2>
                    </div>
                    <div className="email">
                    <FormInput type="email" placeholder="Email" />
                    </div>
                    <div className="password">
                    <FormInput type="password" placeholder="password" />
                    </div>
                    <AuthButton>Sign in </AuthButton>
                    <AuthButton signWithGoogle>Sign in with Google</AuthButton>
                    <div className="no-account">
                        <Link to="/signup" className="signup-link">Create an account</Link>
                    </div>
                </form>
                
                
            </div>
        )
    }
}

export default SignIn;
