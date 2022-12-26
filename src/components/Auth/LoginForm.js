export const LoginForm = (props) => {
    return (
        <form className="login-form">
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
            </div>
            <button type="submit">
                Invia
            </button>   
            <button onClick={(e) => props.switchTemplate('register')}>
                Registrati
            </button>   
        </form>
    )
}

