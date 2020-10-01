import React from "react";

import "./form-input.styles.scss";

const FormInput=({type,...props})=>(
    <div className="inputs">
        <input type={type} className={`input_field`} placeholder={props.placeholder}  required />
    </div>
)
export default FormInput;