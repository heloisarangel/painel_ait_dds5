import React from 'react'
import Navbar from '../layout/Navbar'
import TabelaAula from '../TabelaAulas/TabelaAula';
function GestaoAulas() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Gestão de Aulas</h1>
        <TabelaAula tipo='edit' />
      </div>
    </>
  )
}

export default GestaoAulas;