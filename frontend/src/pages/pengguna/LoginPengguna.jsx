import FormLogin from "../../components/pengguna/FormLogin.jsx";
import React, { useState } from 'react';
import servisLogin from "../../services/pengguna/servisLogin.js";
import { useNavigate } from 'react-router-dom';


const LoginPengguna = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();
    const result = await servisLogin(username, password);
    if(result === 'success') navigate('/dashboard');
  }

  return (
    <FormLogin
      formHandler={formHandler}
      setUsername={setUsername}
      username={username}
      setPassword={setPassword}
      password={password}
    />
  )
}

export default LoginPengguna;