
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import GestaoUsuario from './components/pages/GestaoUsuario'
import ImporCSV from './components/pages/ImportCSV'
import CadastroAula from './components/pages/CadastroAula'
import GestaoAulas from './components/pages/GestaoAulas'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/gestao_usuario' element={<GestaoUsuario/>} />
        <Route path='/import_csv' element={<ImporCSV/>} />
        <Route path='/cadastro_aula' element={<CadastroAula/>} />
        <Route path='/gestao_aulas' element={<GestaoAulas/>} />
      </Routes>
    </Router>
  );
}

export default App;

