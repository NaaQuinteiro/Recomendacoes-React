import estilos from './Filme.module.css'
import poster from '../assets/PosterSupernatural.webp'
import { Card } from './Card'

export function Filme({propsFilme}){
    // aqui nós estamos passando o caminho da imagem dentro da api, é o link + a propse e o item dentro dela que contem o caminho da imagem
    const img = `https://image.tmdb.org/t/p/w400${propsFilme.poster_path}`
    return(
        <Card>
            <figure className={estilos.container}>
                <img src={img}/>
                <figcaption>{propsFilme.title}</figcaption>
                <p>{propsFilme.overview}</p>
                <p>Avaliaçaõ: {propsFilme.vote_average}</p>
            </figure>
        </Card>
        
    )
}
// tag figure serve para colocar uma imagem com subtigtulo e legenda dentro 
//agora passamos para este componente a propse da lista.jsx que armazena no state do esdado de cada objeto (filme)
//passamos para as tags a propse e o atributo dentro dela que deverá ser acessado 
// portanto, toda vez que a função da lista for executada o componente filme será gerado
// mostrando os atributos pertencentes a posição do map que está percorrendo o vetor com o json da api 

