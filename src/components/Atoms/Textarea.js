export const Textarea = ({id,label,type,name,value,onChange,inputClass,validation,placeholder}) => {
    return(
        <div className="input-container">
            {
                label !== '' &&
                <label htmlFor={name} className={`text-lg font-medium`} >
                    {label}
                </label>
            }
            <textarea 
                id={id}
                type={type} 
                rows="4" 
                cols="50"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`text-lg ${inputClass}`}
                data-validation={validation}
            >
            </textarea>
        </div>
    )
}