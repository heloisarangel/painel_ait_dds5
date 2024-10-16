import mysql from "mysql2/promise";
import db from '../conexao.js';

const conexao = mysql.createPool(db);

export async function createAula(aula) {
    console.log('Entrando no Model Aula');
 const sql = `INSERT INTO aulas (
 data,
 data_hora_inicio,
 data_hora_fim,
 turma,
 instrutor,
 unidade_curricular,
 ambiente
 ) 
 VALUES (?,?,?,?,?,?,?)`;

 const params = [
    aula.data,
    aula.data_hora_inicio,
    aula.data_hora_fim,
    aula.turma,
    aula.instrutor,
    aula.unidade_curricular,
    aula.ambiente
 ];

 try{
    const [retorno] = await this.conexao.query(sql,params);
    return [201,retorno];
 } catch (error){
  console.log(error);
  return [500,error];
 }

}
