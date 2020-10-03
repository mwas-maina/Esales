import React, { Component } from 'react';
import "./signup.styles.scss";
import swal from 'sweetalert';
import {createUserProfileDocument} from "../../firebase/firebase.utils";
import AuthButton from '../custom-buttons/submit-buttons/customSubmitButton.component';
import {UserAlt} from '../SVGS/User.svg';
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
    

    onSubmitForm= async (event)=>{
        console.log(this.state);
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
            alert("error");

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
                   
                    <div className="inputs">
                    <input type="text" placeholder="First name"  onChange={this.handleChange} className={`input_field`}  value={displayName} name="displayName" required />
                    </div>
                    <div className="inputs">
                    <input type="email" value={email}  placeholder="email" onChange={this.handleChange} className={`input_field`}  name="email" required />
                    </div>
                    <div className="inputs">
                    <input type="password" placeholder="Password" onChange={this.handleChange} value={password} className={`input_field`}  name="password"  required />
                    </div>
                    <div className="inputs">
                    <input type="password" placeholder="Confirm password"  onChange={this.handleChange} className={`input_field`}  value={confirmPassword}  name="confirmPassword" required />
                    </div>
                 
                    {/* <input type="submit" value="SignUp"  className="sign-btn"/> */}
                    <AuthButton type="submit" >Signup</AuthButton>
                </form>
                </div>
                            
           
        )
    }
}

export default SignUp;
