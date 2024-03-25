import estilos from './Filme.module.css'
import poster from '../assets/PosterSupernatural.webp'
import { Card } from './Card'

export function Filme(){
    return(
        <Card>
            <figure className={estilos.container}>
                <img src={poster}/>
                <figcaption>Supernatural (2005)</figcaption>
                <p>Há 20 anos, Sam e Dean Winchester perderam sua mãe em um trágico e misterioso acidente, no qual as forças sobrenaturais — muito obscuras — estiveram envolvidas. Por esta razão, seu pai decidiu ensiná-los a lidar com a vida sobrenatural</p>
                <p>83%</p>
            </figure>
        </Card>
        
    )
}