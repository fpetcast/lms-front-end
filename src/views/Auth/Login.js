import { LoginForm } from '../../components/Auth/LoginForm'
import { RegisterForm } from '../../components/Auth/RegisterForm';

import loginSvg from '../../assets/images/sitting-reading.svg'
import registerSvg from '../../assets/images/reading-side.svg'

import {useState , useEffect} from 'react'
import { getRequest } from '../../api/config'

function Login() {
    const [authTemplate, setAuthTemplate] = useState('login');
    const [data, setData] = useState([]);


    // async function getSomething() {
    //     console.log('NOW')
    //     const data = await getRequest('entries')
    //     console.log('FETCH DATA', data)
    // }

    useEffect(() => {
        if(data.length === 0) {
            console.log('HOW MANY USE EFFECT')
            getRequest('entries').then(
                (res) => {
                    setData(res.data.entries)

                    console.log('DATA', res.data.entries)
                }
            )
        }
    }, [])

    function handleAuthTemplate(template) {
        console.log('SWITCH',template)
        setAuthTemplate(template)

        renderAuthTemplate()
    }


    function renderAuthTemplate() {
        if(authTemplate === 'login') {
            return <div className="login-form-container w-6/12 flex h-full bg-white flex-col gap-6 items-center">
                        <h1 className="text-3xl font-semibold w-9/12 text-left mt-30%">Login</h1>
                        <LoginForm switchTemplate={handleAuthTemplate} ></LoginForm>
                    </div>
        }else {
            return  <div className="register-form-container w-6/12 flex h-full bg-white flex-col gap-6 items-center">
                         <h1 className="text-3xl font-semibold w-9/12 text-left mt-30%">Register</h1>
                        <RegisterForm switchTemplate={handleAuthTemplate} ></RegisterForm>
                    </div>
        }
    }
    return(
        <div className="auth-container flex h-screen items-center">

            {renderAuthTemplate()}

            <div className="img-contaienr illustration w-6/12 flex justify-center">
                <img className='w-8/12' alt="auth-illustration" src={authTemplate === 'login' ? loginSvg : registerSvg} />
            </div>
                
        </div>
    )
}

export default Login;