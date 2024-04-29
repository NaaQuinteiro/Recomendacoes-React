import estilos from './Sobre.module.css'
export function Sobre(){
    return(
    <main className={estilos.container}>
        <p className={estilos.titulo}>Sobre</p>

        <div className={estilos.principal}>
            <img className={estilos.avatar} 
                        src="https://avatars.githubusercontent.com/u/152279118?v=4" 
                        alt="img avatar" 
            />

            <p className={estilos.nome}>Thayná Alves Quinteiro</p>
            <p>Desenvolvedora FrontEnd</p>
            <p>Digital Solutions 08</p>
            
        </div>
    </main>
    )
    
}