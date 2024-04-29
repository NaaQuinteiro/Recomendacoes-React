import { Routes, Route } from 'react-router-dom'
import { Login } from '../paginas/Login'
import { Inicial } from '../paginas/Inicial'
import { Perfil } from '../paginas/Perfil'
import { Lista } from '../paginas/Lista'
import { Sobre } from '../paginas/Sobre'

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>  

            <Route  path='/inicial' element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route path='perfil' element={<Perfil/>}/>
                <Route path='sobre' element={<Sobre/>}/>
            </Route>
            
        </Routes>
    )
}

// Anotações 
// no path fica uma barra, que equivale ao mesmo endereço do host
//e no element colocamos qual a página(componente) que será chamado, aui no caso seria o Login 
// deopis criamos a segunda rota que levara da pagina login para incial posteriormente
// Agora precisamos chamar a página Login na nossa função principal de APP.jsx
