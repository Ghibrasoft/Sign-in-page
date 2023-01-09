import React, { useState } from "react";
import "./App.css";
import Register from "./components/formInput/Register";
import { USER, USER_VALID } from "./data/RegisterData";
import { useNavigate } from "react-router-dom";

export let username = '';
export let password = '';

function App() {
  const [user, setUser] = useState(USER);
  username = user.name;
  password = user.password;
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Name...',
      label: 'Name',
      required: true,
      pattern: USER_VALID.name,
      errorMessage: "Name should be 3-16 characters and shouldn't include any special character!"
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email...',
      label: 'Email',
      required: true,
      pattern: USER_VALID.email,
      errorMessage: "It should be valid email address!"
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Passowrd...',
      label: 'Passowrd',
      required: true,
      pattern: USER_VALID.password,
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character!"
    },
    {
      id: 4,
      name: 'confirmpassword',
      type: 'password',
      placeholder: 'Confirm password...',
      label: 'Confirm passowrd',
      required: true,
      pattern: user.password,
      errorMessage: "Passwords don't match!"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('You successfully registered');
    navigate('/signin');
  }

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <section className="container register_form_section">
        <form className="register_form" onSubmit={(e) => handleSubmit(e)}>
          <h3>Create Account</h3>
          {inputs.map((item) => (
            <Register key={item.id} {...item} onChange={onchange} />
          ))}
          <button type="submit" className="submit_btn">Register</button>
        </form>
      </section>
    </>
  );
}

export default App;