import Select from 'react-select'

function SelectWrapper({label,value,name,options,onChange,isMultiple}) {
    return (
        <div className="input-container">
            {
                label !== '' &&
                <label htmlFor={name} className={`text-lg font-medium`} >
                    {label}
                </label>
            }
            <Select 
                options={options} 
                onChange={onChange}
                defaultValue={value}
                isMulti={isMultiple ? true : false}
                styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      outlineWidth: '0px',
                      borderWidth: '1px',
                      boxShadow: 'unset'
                    }),
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: '10px',
                    colors: {
                      ...theme.colors,
                      primary25: '#4C9AFF',
                      primary: 'black',
                    },
                })}
            >
            </Select>
        </div>  
    )
}

export default SelectWrapper