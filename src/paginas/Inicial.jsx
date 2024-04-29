import estilos from './Inicial.module.css'
import {Cabecalho} from '../componentes/Cabecalho'
import {Lateral} from '../componentes/Lateral'
import {Lista} from './Lista'
import { Outlet } from 'react-router-dom'

export function Inicial() {
  return (
    <div className={estilos.gridContainer}>
      <Cabecalho/>
      <Lateral/>

      <Outlet/>

    </div>  
  )
}

// o outlet serve como elemento de entrada para o componente inical 
//é onde o react touter entente que dentro dessa pa´gina nesse componente haverá 
// uma navegação
