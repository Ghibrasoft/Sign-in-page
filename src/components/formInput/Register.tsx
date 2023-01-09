import React, { useState } from 'react'


type Props = {
    name: string;
    type: string;
    label: string;
    placeholder: string;
    errorMessage: string;
    pattern: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Register = (info: Props) => {
    const [focused, setFocused] = useState(false);

    return (
        <>
            <div className='input_div'>
                {/* <label>{info.label}</label> */}
                <input className='form_input'
                    name={info.name}
                    type={info.type}
                    pattern={info.pattern}
                    placeholder={info.placeholder}
                    onChange={info.onChange}
                    onBlur={() => setFocused(true)}
                    required
                />
                {info.pattern && focused ? <small className='error_message'>{info.errorMessage}</small> : null}
            </div>
        </>
    )
}

export default Register;