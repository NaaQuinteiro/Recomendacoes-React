import { useState } from 'react'
import estilos from './Login.module.css'
import { useNavigate } from 'react-router-dom'

export function Login(){

    // Vinculando os inputs aos states, armazenando oq há no componente
    //Ele consta com duas variaveis, uma de leitura(get)e outra de alteração(set)
    const[usuario, setUsuario] = useState('')
    const[senha, setSenha] = useState('')
    const navigate = useNavigate()

    function obterDadosFormulario(){

        // console.log(`Usuário: ${usuario}`)
        // console.log(`Senha: ${senha}`)
        
        navigate('inicial')
      

    }

    return(
        <div className={estilos.container}>

            <form 
                className={estilos.formulario}
                onSubmit={obterDadosFormulario}
            >

                <input 
                    className={estilos.campo}
                    placeholder="Usuário" 
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />

                <input                     
                    className={estilos.campo}
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <button 
                    className={estilos.botao}
                >Entrar</button>

            </form>

        </div>
    )
}

// o e é de event, o target pega o elemento html usado no momento e o value 
//para pegar o valor do elemento alterado no html, assim tudo oq ue for digitado no input será
// o conteúdo do input
// o event é o evento de escuta e o onChange é essa mudança que acontece
// o onChange é um evento de escuta que le cada alteração dentro do html

// O onSubmit é um evento de escuta o click do botão denntro do formulario, portanto quando o usuário 
//clicar em enviar ele vai executar a função obter dados do formulário