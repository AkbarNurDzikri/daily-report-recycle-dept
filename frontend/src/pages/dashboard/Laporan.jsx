import { Container, Row } from 'react-bootstrap';
import NavbarComponent from "../../components/layouts/NavbarComponent.jsx";
import JudulHalaman from '../../components/layouts/JudulHalaman.jsx';
import TombolBuatLaporan from '../../components/laporan/TombolBuatLaporan.jsx'
import TombolExportLaporan from '../../components/laporan/TombolExportLaporan.jsx'
import ParameterTanggalLaporan from '../../components/laporan/ParameterTanggalLaporan.jsx';
import ParameterPencarianLaporan from '../../components/laporan/ParameterPencarianLaporan.jsx';
import TableLaporan from '../../components/laporan/TableLaporan.jsx';
import React, { useEffect, useState } from 'react';

const Laporan = () => {
  const [paramDariTgl, setParamDariTgl] = useState('');
  const [paramSampaiTgl, setParamSampaiTgl] = useState('');

  useEffect(() => {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth() + 1; // index getMonth dimulai dari 0
    const year = time.getFullYear();
    const now = `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
    setParamDariTgl(now);
    setParamSampaiTgl(now);
  }, [])


  return (
    <>
      <NavbarComponent />
      <Container style={{marginTop: '75px'}}>
        <div className='d-flex align-items-center justify-content-center'>
          <JudulHalaman judulHalaman='DAILY REPORT RECYCLE' />
        </div>
        <div className='d-flex align-items-center justify-content-center pb-2' style={{borderBottom: '1px solid black'}}>
          <TombolExportLaporan />
          <ParameterTanggalLaporan
            setParamDariTgl={setParamDariTgl}
            paramDariTgl={paramDariTgl}
            setParamSampaiTgl={setParamSampaiTgl}
            paramSampaiTgl={paramSampaiTgl}
          />
          <ParameterPencarianLaporan />
          <TombolBuatLaporan />
        </div>
        <div className='mt-3'>
          <TableLaporan />
        </div>
      </Container>
    </>
  )
}

export default Laporan;