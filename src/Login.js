import { useState } from 'react';
import './Login.css';

let correctEmail = "abiainapur24@gmail.com";
let correctPassword = "Abhishek@123";

function Login()
{
    const [emailError,setEmailErrror] = useState(''); 
    const [passwordError, setPasswordError] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [show,setShow] = useState(true);
    const [passwordType,setPasswordType] = useState('password');

    function onEmailChange(event)
    {
        setEmail(event.target.value);
    }

    function onPasswordChange(event)
    {
        setPassword(event.target.value)
    }

    function onLogin()
    {
        let evalue = email;
        evalue = evalue.trim();

        let pvalue = password;

        let flag = true;

        if(evalue === '')
        {
            setEmailErrror('Email Field is Required');
            flag = false;
            
        }
        else
        {
            setEmailErrror('');
        }

        if(pvalue === '')
        {
            setPasswordError("Password Field is Required");
            flag = false;
        }
        else
        {
            setPasswordError('');
        }

        if(password && email)
        {
            if(email !== correctEmail || password !== correctPassword)
            {
                setPasswordError('Email or Password is invalid');
                flag = false;
            }
            else
            {
                setPasswordError('');
            }
        }

        if(flag)
        {
            alert("Login Successfull");
        }
    }

    function showPassword(event)
    {
        if(event.target.checked)
        {
            setPasswordType("text");
        }
        else
        {
            setPasswordType("password");
        }

        setShow(current => !current);
    }

    return (
        <div id="login-container">
            <div>
                <h3>Welcome</h3>
                <h1>React Login Page</h1>

                <label htmlFor = "email">E-mail</label>
                <input id="email" type="email" placeholder="ex abc@gmail.com" value={email} onChange={onEmailChange}/>
                <span className='error-message'>{emailError}</span>

                <label htmlFor = "password">Password</label>
                <input id="password" type={passwordType} placeholder="********" value={password} onChange={onPasswordChange}/>
                <span className='error-message'>{passwordError}</span>

                <span>
                    <input type='checkbox' id='show-pass' value={show} onChange={showPassword}/>
                    <span>show password</span>
                </span>

                <button onClick={onLogin}>Login</button>
                </div>
        </div>
    )
}

export default Login;