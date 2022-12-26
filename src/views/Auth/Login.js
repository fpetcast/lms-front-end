import { LoginForm } from '../../components/Auth/LoginForm'
import { RegisterForm } from '../../components/Auth/RegisterForm';
import loginSvg from '../../assets/images/sitting-reading.svg'
import {useState} from 'react'

function Login() {
    const [authTemplate, setAuthTemplate] = useState('login');
    

    function handleAuthTemplate(template) {
        console.log('SWITCH',template)
        setAuthTemplate(template)
    }


    return(
        <div className="auth-container flex h-screen items-center">

            {authTemplate == 'login' ?
                    (
                    <div className="login-form-container w-6/12 flex h-full bg-white">
                        <LoginForm switchTemplate={handleAuthTemplate} ></LoginForm>
                    </div>
                    ) :
                    (
                    <div className="login-form-container w-6/12 flex h-full bg-white">
                        <RegisterForm switchTemplate={handleAuthTemplate} ></RegisterForm>
                    </div>
                    ) 
            }

            <div className="img-contaienr illustartion w-6/12">
                <img src={authTemplate == 'login' ? loginSvg : loginSvg} />
            </div>
                
        </div>
    )
}

export default Login;