import React, { Component } from 'react';
import "./signup.styles.scss";
import FormInput from '../forminput/form-input.component';
import swal from 'sweetalert';

import AuthButton from '../custom-buttons/submit-buttons/customSubmitButton.component';
import UserAlt from '../SVGS/User.svg';

export class SignUp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    onSubmitForm=(event)=>{
        event.preventDefault();
        swal('completed signup');

    }


    
    render() {
        return (
            <div className="signup-form">
                <form className="sign-up" onSubmit={this.onSubmitForm}>
                    <div className="text-highlight">
                       <UserAlt />
                        <h2>Sign-up</h2>
                    </div>
                    <div className="name">
                    <FormInput type="text" placeholder="First name"  required />
                    </div>
                    <div className="email">
                    <FormInput type="email" placeholder="email" required />
                    </div>
                    <div className="password">
                    <FormInput type="password" placeholder="Password" required />
                    </div>
                    <div className="password">
                    <FormInput type="text" placeholder="Confirm password"  required />
                    </div>
                    {/* <input type="submit" value="SignUp"  className="sign-btn"/> */}
                    <AuthButton>signup</AuthButton>
                </form>
                            
            </div>
        )
    }
}

export default SignUp;
