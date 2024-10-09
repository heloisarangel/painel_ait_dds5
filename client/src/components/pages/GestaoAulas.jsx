import React, { useEffect } from 'react'
import Navbar from '../layout/Navbar'
import TabelaAula from '../TabelaAulas/TabelaAula';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';


function GestaoAulas() {
//{tipo} faz uso do useParams  que é uma variavel passada via url
// useParams deve ser declarado na rota em App.jsx como exemplo o 
// /gestao_aulas/:tipo
  const { tipo } = useParams();
  // exibeAlerta é responsavel pelo estado da mensagem que inicia como falso
  const [exibeAlerta, setExibeAlerta] = useState(false);
  // cada mensagem possui um tipo a classe e o texto
  const [tipoMensagem, setTipoMensagem] = useState(tipo);
  const [classeMensagem, setClasseMensagem] = useState('');
  const [textoMensagem, setTextoMensagem] = useState('');

 //useEffect é a função pós carregamento
  useEffect(() => {
    //o if verifica se o tipoMensagem foi definido
    if (tipoMensagem) {
      atualizaMensagem();
      setExibeAlerta(true);
      atualizaMensagem();
      //setTimeout atribui um delay para a mensagem sumir e apaga e atribui '' ao tipoMensagem
      setTimeout(() => {
        setExibeAlerta(false);
      }, 5000);
    }
  }, [tipoMensagem]);
  // o metodo delete nesse software é diferente e por isso precisa de uma função
  //especifica

  function mensagemDelete() {
    setTipoMensagem('deletada');
  }
  //atualizandoMensagem() é uma função que faz uso do switch case que trabalha
  //cada tipo de mensagem de forma separada e atribuir classe e mensagem

  function atualizaMensagem() {
    switch (tipoMensagem) {
      case 'cadastrada':
        setClasseMensagem('alert alert-success');
        setTextoMensagem('Aula Cadastrada');
        break;
      case 'deletada':
        setClasseMensagem('alert alert-danger');
        setTextoMensagem('Aula deletada');
        break;
      case 'editada':
        setClasseMensagem('alert alert-primary');
        setTextoMensagem('Aula editada');
        break;


    }
  }

  return (
    <>
    {/* Importando barra de navegacao*/}
      <Navbar />
      <div className='container'>
        <h1 className='text-center mt-3'>Gestão de Aulas</h1>
        {/*ao chamar exibeAlerta seguido de && a renderezação fica condicional*/}
        {exibeAlerta && <div className={classeMensagem}>{textoMensagem}</div>}
        <div className='col-12 text end my-2'>
          {/* O link é um objeto do reac-router-dom quer permite navegar sem recarreagar a pagina*/}
          <Link to='/cadastro_aula' className='btn btn-primary ms-auto'>Cadastro Aula</Link>
        </div>
        {/* TabelaAulas é um componente que recebe tipo='edit' que faz com que seja editavel e também é passada a função de mensagemDelete 
        pois nela esta a funcao de deletar*/}
        <TabelaAula tipo='edit' onDelete Success={mensagemDelete} />
      </div>
    </>
  )
}

export default GestaoAulas;