// Importando express
import express from 'express';

//importando cors
import cors from 'cors';

//Importando funções (metodos do controller)
import {mostrarAulas,criarAula,atualizarAula, excluirAula,  } from './controllers/AulaController.js';
import { showOneAula } from './models/AulaModel.js';

//Chamando função express
const app = express();
const porta = 5000;

//Habilitando cors
app.use(cors());

//Habilitando JSON
app.use(express.json());

// Rota padrão para teste de API
app.get('/', (req,res)=>{
  res.send('Teste de API  funcionando ')
});

// Rotas de aula
app.post('/aulas',criarAula);

app.get('/aulas' ,mostrarAulas);

app.put('/aulas/:id',atualizarAula);

app.delete('/aulas/:id',excluirAula);

app.get('/aulas/:id', showOneAula );





// Iniciando API e exibindo mensagem no console com a porta
app.listen(porta,()=>{
 console.log (`API rodando na porta ${porta}`)
});



