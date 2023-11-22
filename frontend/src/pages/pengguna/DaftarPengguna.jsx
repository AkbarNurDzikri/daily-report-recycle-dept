import React, { useState } from 'react';
import servisPendaftaran from '../../services/pengguna/servisPendaftaran.js';
import FormPendaftaran from '../../components/pengguna/FormPendaftaran.jsx';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const DaftarPengguna = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmPassword, setKonfirmPassword] = useState('');
  const [namaLengkap, setNamaLengkap] = useState('');
  const [namaIbuKandung, setNamaIbuKandung] = useState('');
  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();


    if(password !== konfirmPassword) return Swal.fire({
      icon: "error",
      title: "Konfirmasi password tidak sesuai !"
    });
    
    const result = await servisPendaftaran(username, password, namaLengkap, namaIbuKandung);
    if(result === 'success') {
      setUsername('');
      setPassword('');
      setKonfirmPassword('');
      setNamaLengkap('');
      setNamaIbuKandung('');
      navigate('/login');
    }
  }

  return (
    <FormPendaftaran
      formHandler={formHandler}

      setUsername={setUsername}
      setPassword={setPassword}
      setKonfirmPassword={setKonfirmPassword}
      setNamaLengkap={setNamaLengkap}
      setNamaIbuKandung={setNamaIbuKandung}

      username={username}
      password={password}
      konfirmPassword={konfirmPassword}
      namaLengkap={namaLengkap}
      namaIbuKandung={namaIbuKandung}
    />
  )
}

export default DaftarPengguna;