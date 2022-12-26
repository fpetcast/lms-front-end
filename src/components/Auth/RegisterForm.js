export const RegisterForm = (props) => {
    return (
        <form className="register-form">
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
        </form>
    )
}