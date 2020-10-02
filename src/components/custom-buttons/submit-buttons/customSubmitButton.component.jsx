import React from 'react';
import "./customButtonSubmit.styles.scss";

const AuthButton=({children,signWithGoogle})=>(
    <button className={`auth-button ${signWithGoogle ? "google":null}`}>
        {children}
    </button>
)
export default AuthButton;