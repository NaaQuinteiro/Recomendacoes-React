import { BrowserRouter } from 'react-router-dom';
import './global.css'
import { Rotas } from './rotas/Rotas';

export function App() {
  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>

  )
}

// Anotações
// precisamos criar um contexto de navegação que permitirá que todas as páginas que forem chamadas a partir
//dessa possua os acessos aos arquivos de navegação

