import React from "react";

import "./form-input.styles.scss";

const FormInput=({type,placeholder})=>(
    <div className="inputs">
        <input type={type} className={`input_field`} placeholder={placeholder}  required />
    </div>
)
export default FormInput;