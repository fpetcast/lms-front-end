import { useState } from 'react'
import { Button } from '../Atoms/Btn';
import { Input } from '../Atoms/Input';
import { useNavigate } from "react-router-dom";

export const RegisterForm = (props) => {
    const [inputValue, setInputValue] = useState({ name: "", surname:"", email: "" , password: ""});
    const { name, surname, email, password } = inputValue;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("[REGISTER FORM] fields:",inputValue);
    };

    return (
        <form className="login-form w-9/12 flex flex-col gap-5">
            <Input
                value={name}
                onChange={handleChange}
                label="Name"
                id="name"
                name="name"
            >
            </Input>
            <Input
                value={surname}
                onChange={handleChange}
                label="Surname"
                id="surname"
                name="surname"
            ></Input>
            <Input
                value={email}
                onChange={handleChange}
                label="Email"
                id="email"
                name="email"
            ></Input>
            <Input
                value={password}
                onChange={handleChange}
                label="Password"
                id="password"
                name="password"
            ></Input>
            <Button 
                    className='btn-primary w-6/12 self-center mt-5' 
                    onClick={handleSubmit} 
                >
                    Register
            </Button>
            <div className='self-center'>
                Have you an account? <span className='text-palette1-green-strong cursor-pointer hover:underline' onClick={(e) => props.switchTemplate('login')} >Log in</span>
            </div>   
        </form>
    )
}

