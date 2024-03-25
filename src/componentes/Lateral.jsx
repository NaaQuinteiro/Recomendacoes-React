import estilos from './Lateral.module.css'

export function Lateral(){
    return(
        <aside className={estilos.container}>

            <header>
                <img className={estilos.imagemCabecalho} 
                src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="img cabeçalho" 
                />

            <div className={estilos.perfil}>
                <img className={estilos.avatar} 
                    src="https://avatars.githubusercontent.com/u/152279118?v=4" 
                    alt="img avatar" 
                />

                <p>Thayná Quinteiro</p>
            </div>
            </header>
        </aside>
    )
}
