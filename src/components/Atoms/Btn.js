export const Button = ( {className , btnType = 'button' , onClick, children}) => {
    return (
        <button type={btnType} onClick={onClick} className={className} >
            {children}
        </button>
    )
}