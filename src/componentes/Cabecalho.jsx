import estilos from './Cabecalho.module.css'

export function Cabecalho(){
    return(
        <header className={estilos.container}>
            <p className={estilos.container}>Recomendações</p>
        </header>
    )
}