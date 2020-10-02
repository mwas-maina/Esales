import React, { Component } from 'react';
import "./signup.styles.scss";
import FormInput from '../forminput/form-input.component';
import swal from 'sweetalert';
import {createUserProfileDocument} from "../../firebase/firebase.utils";
import AuthButton from '../custom-buttons/submit-buttons/customSubmitButton.component';
import UserAlt from '../SVGS/User.svg';
import { auth } from 'firebase';

export class SignUp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
         
      }
    }
    

    onSubmitForm=async (event)=>{
        event.preventDefault();
        const{displayName,email,password,confirmPassword}=this.state;
        if(password !== confirmPassword) {
            swal("password mismatch");
            return;
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            
            createUserProfileDocument(user,{displayName});//this method returns userRef ie "Users/userId" ie the reference of  data inside the user collection associated with the id or the created user.
            //such that we can get data such as DisplayName ,email etc
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            })
            //Clear the fields state
        }
        catch(error){
            swal(error);

        }
    }
    handleChange=event=>{
        const{name,value}=event.target;
        this.setState({
            [name]:value
        })
    }


    
    render() {
        const {displayName,email,password,confirmPassword}=this.state;
        return (
            <div className="signup-form">
                <form className="sign-up" onSubmit={this.onSubmitForm}>
                    <div className="text-highlight">
                       <UserAlt />
                        <h2>Sign-up</h2>
                    </div>
                    <div className="name">
                    <FormInput type="text" placeholder="First name"  handleChange={this.handleChange} value={displayName} name="displayName" required />
                    </div>
                    <div className="email">
                    <FormInput type="email" value={email}  placeholder="email" handleChange={this.handleChange} name="email" required />
                    </div>
                    <div className="password">
                    <FormInput type="password" placeholder="Password" handleChange={this.handleChange} value={password} name="password"  required />
                    </div>
                    <div className="password">
                    <FormInput type="password" placeholder="Confirm password"  handleChange={this.handleChange}  value={confirmPassword}  name="confirmPassword" required />
                    </div>
                    {/* <input type="submit" value="SignUp"  className="sign-btn"/> */}
                    <AuthButton type="submit" >signup</AuthButton>
                </form>
                            
            </div>
        )
    }
}

export default SignUp;
