import { useEffect, useState } from "react";
import styles from './Relogio.module.css';

//Declarando função relógio
function Relogio() {

    // Declarando hora como estado
    const [hora, setHora] = useState('');

    //chamando função pós carregamento
    useEffect(() => {
        //Chamando função de Atualizar Horário primeira vez
        atualizaHorario();

        // Declarando  intervalo de 1 segundo para atualizar relógio
        const intervalo = setInterval(atualizaHorario, 1000);
        return () => {
            clearInterval(intervalo);
        }
    }, []);


// Declarando função que atribui a hora minutos e segundos atuais 
    function atualizaHorario() {
        // Declarando Objeto do tipo Date
        const agora = new Date();
        // Pegando hora minutos e segundos
        const horaMinutosSegundos = agora.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        //Atualizando o estado hora para hora minutos e segundos atuais
        setHora(horaMinutosSegundos);
    }

    return (
        //Retornando uma div com hora minutos e segundos de forma correta
        <div className={styles.relogio}>{hora}</div>
    )
}

export default Relogio;
