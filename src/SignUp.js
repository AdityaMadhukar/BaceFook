import React, { useState } from 'react';
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    
    const handleValidate = () => {
        if(password!=cPassword)
        {
            alert("Invalid Credentials.\nPassword mismatch");
        }
        else{
            alert("Account has been created successfully");
        }
    }
    
    
    return (  
        <div className="SignUp">
            <h2>SignUp</h2><br />
            <form onSubmit={handleValidate}>
            <label>Name </label><input type="text" required value={name} onChange={(e)=> setName(e.target.value)}/><br /><br />
            <label>Email </label><input type="email" required value={email} onChange={(e)=> setEmail(e.target.value)}/><br /><br />
            <label>Phone Number </label><input type="tel" pattern="[6-9]{1}[0-9]{9}" required value={phone} onChange={(e)=> setPhone(e.target.value)}/><br /><br />
            <label>Password </label><input type="password" pattern='(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$' required value={password} onChange={(e)=> setPassword(e.target.value)}/><br /><br />
            <label>Confirm Password </label><input type="password" pattern='(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$' required value={cPassword} onChange={(e)=> setCPassword(e.target.value)}/><br />
            <ul>
                <li>The password length must be greater than or equal to 8</li>
                <li>The password must contain one or more uppercase characters</li>
                <li>The password must contain one or more lowercase characters</li>
                <li>The password must contain one or more numeric values</li>
                <li>The password must contain one or more special characters</li>
            </ul>
            <br />
            <button type="submit">Sign Up</button>
            </form>
            <br /><br />
        </div>
    );
}
 
export default SignUp;