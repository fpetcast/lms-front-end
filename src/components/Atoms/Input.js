export const Input = ({id,label,type,name,value,onChange}) => {
    return(
        <div className="input-container">
            <label htmlFor="name" className='text-lg font-medium'>{label}</label>
            <input 
                id={id}
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                className="custom-input text-lg"
            />
            <span className='focus-border bg-palette1-green-strong'></span>
        </div>
    )
}