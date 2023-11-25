import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DaftarPengguna from './pages/pengguna/DaftarPengguna.jsx'
import LoginPengguna from './pages/pengguna/LoginPengguna.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Laporan from './pages/dashboard/Laporan.jsx';
import MachinePage from './pages/master/MachinePage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DaftarPengguna />} />
        <Route path='/login' element={<LoginPengguna />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/report' element={<Laporan />} />
        <Route path='/master/machines' element={<MachinePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
