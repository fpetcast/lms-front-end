export const Input = ({id,label,type,name,value,onChange,inputClass,validation,placeholder}) => {
    return(
        <div className="input-container">
            {
                label !== '' &&
                <label htmlFor={name} className={`text-lg font-medium`} >
                    {label}
                </label>
            }
            <input 
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`text-lg ${inputClass}`}
                data-validation={validation}
            />
            {
                inputClass === 'custom-input' &&
                <span className='focus-border bg-palette1-green-strong'></span>
            }

        </div>
    )
}