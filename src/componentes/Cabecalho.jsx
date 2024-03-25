import estilos from './Cabecalho.module.css'
//biblioteca para usar os icones 
import {FilmReel, FilmStrip} from '@phosphor-icons/react'

export function Cabecalho(){
    return(
        <header className={estilos.container}>
            <FilmReel
            weight='duotone'
                size={30}
                color='#fff'
            />
            <p className={estilos.container}>Recomendações</p>
            <FilmStrip
            weight='duotone'
                size={30}
                color='#fff'
            />
        </header>
    )
}