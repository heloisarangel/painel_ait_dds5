import React from 'react';
import styles from './Home.module.css';
import Cabecalho from '../layout/Cabecalho';
import TabelaAulas from "../TabelaAulas/TabelaAula";
import LateralImagens from '../LateralImagens/LateralImagens';


function Home() {
  return (
  <>
  <Cabecalho/>
  <TabelaAulas/>
  <LateralImagens/>
  </>
  )
}

export default Home;