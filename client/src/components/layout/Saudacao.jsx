import { useEffect, useState } from "react";
import styles from './Saudacao.module.css';

// Criando função Saudacao
function Saudacao() {
    // Criando função de saudacao e definindo um intervalo de 1 segundo
    const [saudacaoPeriodo, setSaudacaoPeriodo] = useState('');
    useEffect(() => {
        atualizandoSaudacao();
        const intervalo = setInterval(atualizandoSaudacao,1000);
        return ()=>{
            clearInterval(intervalo);
        }
    }, [])

    // Criando texto da saudação de cabeçalho
    function atualizandoSaudacao() {
        // Declarando objeto do tipo Date 
        const agora = new Date();

        // Obtendo hora em inteiro exemplo 07:35:00  retorna 7
        const hora = agora.getHours();

        // Obtendo dia da semana em inteiro iniciando em domingo que retorna 0 e sabado que retorna 6
        const dia = agora.getDay();

        // Declarando variavel do texto saudacao
        let textoSaudacao = '';

        // Definindo arrauy com dias da semana
        const diaSemana = [
            'Domingo',
            'Segunda-Feira',
            'Terça-Feira',
            'Quarta-Feira',
            'Quinta-Feira',
            'Sexta-Feira',
            'Sábado'
        ];
        
        // Adicionando o dia da semana ao texto Saudacao
        textoSaudacao += diaSemana[dia];
        // Adicionado saudacao ao textoSaudacao
        if (hora>=18){
            textoSaudacao += 'Boa Noite';
        }else if (hora>=12){
            textoSaudacao += ' Boa Tarde';
        }else {
            textoSaudacao += 'Bom dia';
        }
        // Chamando funcao de atribução 
        setSaudacaoPeriodo(textoSaudacao);
    }

    return (
        <div className={styles.saudacao}>
            {saudacaoPeriodo}
        </div>
    )
}

export default Saudacao;

