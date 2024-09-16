import React from 'react';
import styles from './Home.module.css';
import Cabecalho from '../layout/Cabecalho';
import TabelaAula from '../TabelaAulas/TabelaAula';
import AbreviaAmbiente from '../TabelaAulas/AbreviaAmbiente';


function Home() {
  return (
  <>
  <Cabecalho/>
  <TabelaAula/>
  <AbreviaAmbiente/>
  </>
  )
}

export default Home;