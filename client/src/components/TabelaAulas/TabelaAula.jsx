import { useEffect, useState } from 'react';
import AbreviaData from "./AbreviaData";

function TabelaAula() {
    const [aulas, setAulas] = useState([])

    useEffect(() => {
        baixarAulas();
    }, [])


    async function baixarAulas() {
        try {
            const resposta = await fetch('http://localhost:5000/aulas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!resposta) {
                throw new Error('Erro ao buscar aulas');

            }
            const consulta = await resposta.json();
            setAulas(consulta);
        } catch (error) {
            console.log('Error ao consultar aulas', error)
        }
    }
    return (
        <div>
            <table>
                <thead>
                    <th>Início</th>
                    <th>Fim</th>
                    <th>Turma</th>
                    <th>Instrutor</th>
                    <th>Unidade Curricular</th>
                    <th>Ambiente</th>
                </thead>
                <tbody>
                    {aulas.map((aula) => (
                        <tr key={aula.id}>
                            <td><AbreviaData data={aula.data_hora_inicio} /></td>
                            <td><AbreviaData data={aula.data_hora_fim} /></td>
                            <td>{aula.turma}</td>
                            <td>{aula.instrutor}</td>
                            <td>{aula.unidade_curricular}</td>
                            <td>{aula.ambiente}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaAula;