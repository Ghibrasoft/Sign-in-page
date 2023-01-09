import React, { useState } from 'react'
import '../../style/sign-in/SignIn.css';
import { BsEyeSlash } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { username, password } from '../../App';


const SignIn = () => {
  const [type, setType] = useState('password');

  const navigate = useNavigate();

  const signInHandler = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login success');
    navigate('/');
  }

  const handleNavigate = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  }

  const toggleInputType = () => {
    if (type === 'password') {
      setType('text');
      return;
    }
    setType('password');
  }

  return (
    <section className='signin_form_section'>
      <form onSubmit={(e) => signInHandler(e)} className='signin_form'>
        <div className='inputs_div'>

          <input
            type='text'
            className='user_input name'
            placeholder='Username...'
            pattern={username}
            required
          />
          <div className='password_input_div'>
            <input
              type={type}
              className='user_input password'
              placeholder='Password...'
              pattern={password}
              required
            />
            <span className='showhide_password_span' onClick={toggleInputType}><BsEyeSlash /></span>
          </div>
          <span className='nothave_account_span' onClick={handleNavigate}>Not have account ?</span>
          <button type='submit' className='signin_btn'>Sign in</button>

        </div>
      </form>
    </section>
  )
}

export default SignIn
