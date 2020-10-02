import React, { Component } from 'react';
import FormInput from '../forminput/form-input.component';
import  "./signin.styles.scss";
import AuthButton from '../custom-buttons/submit-buttons/customSubmitButton.component';
import UserAlt from '../SVGS/User.svg';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import swal from 'sweetalert';
import { auth } from 'firebase';




export class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:"",
         password:""
      }
    }

    handleFormChange=event=>{
        const{name,value}=event.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit=async e=>{
        e.preventDefault();
        const{email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:"",
                password:""
            })

            swal("Logged in successfully");
        }
        catch(error){

            swal({
                title: "Error!",
                text: "Failed.Try again",
                dangerMode:true,
                button: "Dismiss",
            });

        }
        this.setState({
            email:"",
            password:""
        })
       


    }
    
    render() {
        const{email,password}=this.state;
        return (
            <div className="sign-in">
                <form className="signin" onSubmit={this.handleSubmit}>
                    <div className="text-highlight">
                        <UserAlt />
                        
                        <h2>Sign in</h2>
                    </div>
                    <div className="email">
                    <FormInput type="email" name="email" placeholder="Email" value={email} handleChange={this.handleFormChange} />
                    </div>
                    <div className="password">
                    <FormInput type="password" name="password" placeholder="password" handleChange={this.handleFormChange} value={password}/>
                    </div>
                    <AuthButton type="submit">Sign in </AuthButton>
                    <AuthButton onClick={signInWithGoogle} signWithGoogle>Sign in with Google</AuthButton>
                    <div className="no-account">
                        <Link to="/signup" className="signup-link">Create an account</Link>
                    </div>
                </form>
                
                
            </div>
        )
    }
}

export default SignIn;
