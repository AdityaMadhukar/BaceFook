import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleValidate = () => {
        alert("Sign-In Successful");
    }
    return (  
        <div className="SignIn">
            <h2>SignIn</h2><br />
            <form onSubmit={handleValidate}>
            <label>Email </label><input type="email" required value={email} onChange={(e)=> setEmail(e.target.value)}/><br /><br />
            <label>Password </label><input type="password" required pattern='(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$' value={password} onChange={(e)=> setPassword(e.target.value)}/><br />
            <ul>
                <li>The password length must be greater than or equal to 8</li>
                <li>The password must contain one or more uppercase characters</li>
                <li>The password must contain one or more lowercase characters</li>
                <li>The password must contain one or more numeric values</li>
                <li>The password must contain one or more special characters</li>
            </ul>
            <br />
            <button type="submit">Sign In</button>
            </form>
            <br /><br />
        </div>
    );
}
 
export default SignIn;