import { useState } from 'react'
import { Button } from '../Atoms/Btn';
import { Input } from '../Atoms/Input';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/auth';

export const RegisterForm = (props) => {
    const [inputValue, setInputValue] = useState({ name: "", surname:"", email: "" , password: ""});
    const { name, surname, email, password } = inputValue;
    const dispatch = useDispatch();
  
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
        let allRequired = true

        Object.keys(inputValue).forEach(key => {
            console.log(key, inputValue[key]);
            if(inputValue[key] === '') {
                allRequired = false
            }
        });

        if(allRequired) {
            console.log('ALL COMPILED',inputValue)
            dispatch(register(inputValue.name,inputValue.surname,inputValue.email,inputValue.password))
            .then((res) => {
                console.log('REGISTER SUCCESS',res)
            }).catch((err) => {
                console.log("[REGISTER FORM] register err",err);
            })
        }
    };

    return (
        <form className="login-form w-9/12 flex flex-col gap-5">
            <Input
                value={name}
                onChange={handleChange}
                label="Name"
                id="name"
                name="name"
                inputClass='custom-input'
            >
            </Input>
            <Input
                value={surname}
                onChange={handleChange}
                label="Surname"
                id="surname"
                name="surname"
                inputClass='custom-input'
            ></Input>
            <Input
                value={email}
                onChange={handleChange}
                label="Email"
                id="email"
                name="email"
                inputClass='custom-input'
            ></Input>
            <Input
                value={password}
                onChange={handleChange}
                label="Password"
                id="password"
                name="password"
                inputClass='custom-input'
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

