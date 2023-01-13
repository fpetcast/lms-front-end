import { useState , useContext } from 'react'
import { GlobalContext , GlobalConsumer } from '../../context/Global.context';
import { Button } from '../Atoms/Btn';
import { useNavigate } from "react-router-dom";

export const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login , globalState } = useContext(GlobalContext);
    const dispatch  = useContext(GlobalConsumer);
    const navigate = useNavigate();
    console.log('APP STATE',globalState)

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email,password).then((res) => {
            if(res) {
                console.log(dispatch)
                dispatch({ type: "LOGGED_IN"});
                console.log('LOGIN STATE IN COMP',globalState)       
                navigate("/");
            }
        })
    };

    return (
        <form className="login-form w-9/12 flex flex-col gap-5">
            <div className="input-container">
                <label htmlFor="email" className='text-xl font-medium'>Email </label>
                <input 
                    type="text" 
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    className="custom-input text-lg"
                    required 
                />
                <span className='focus-border bg-palette1-green-strong'></span>
            </div>
            <div className="input-container">
                <label className='text-xl'>Password </label>
                <input 
                    type="text" 
                    className="custom-input"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                    required 
                />
                <span className='focus-border bg-palette1-green-strong'></span>
            </div>
            <Button 
                    className='btn-primary w-6/12 self-center mt-5' 
                    onClick={handleSubmit} 
                >
                    Login
            </Button>
            <div className='self-center'>
                Not registered yet? <span className='text-palette1-green-strong cursor-pointer hover:underline' onClick={(e) => props.switchTemplate('register')} >Create an Account</span>
            </div>   
        </form>
    )
}

