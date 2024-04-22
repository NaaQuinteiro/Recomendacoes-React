import estilos from './Perfil.module.css'
import {useForm} from 'react-hook-form' // importando biblioteca de forms
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


// criamos esse Schema de validação do formulário de perfil antes da função 
//principal perfil pois ele será utilizado na execução dela
//O zod tem as regras de validaçaõ salvas num arquivi que ele chama de Schema
const schemaPerfil = z.object({
    //aqui colcoamos o mesmo nome usado no register (obrigatorio)

    nome: z.string()  // em seguida chamamos o objeto zod coloca. o tipo do campo
                .min(1, 'Informe um nome') //aqui colocamos funções para ver o tamanho min esperado e max
                .max(25, 'Máximo de 25 caracteres'), // também podemos colcoar em seguida qual a mensagem que será exibida caso o campo seja preenchido incorretamente

    usuario: z.string()
                .min(5, 'Minimo de 5 caracteres')
                .max(15, 'Máximo de 15 caracteres'),

    senha: z.string()
                .min(8, 'Minimo de 8 caracteres')
                .max(8, 'Máximo de 8 caracteres'),
}) 

export function Perfil(){

    const { 
        register, 
        handleSubmit,
        formState: {errors}    // por aqui acessamos as mensagens de erros geradas no SchemaPerfil 
    
    } = useForm({
        resolver: zodResolver(schemaPerfil)
    })

    function obterDadosFormulario(data){
        console.log(`Nome: ${data.nome}`)
        console.log(`Usuário: ${data.usuario}`)
        console.log(`Senha: ${data.senha}`)
    }

    return(
        <div className={estilos.container}>

            <form 
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}
            >
                {errors.nome && (
                    <p className={estilos.messageErro}>{errors.nome.message}</p>
                )}
                <input 
                    {...register('nome')}
                    className={estilos.campo}
                    placeholder="Nome" 
                />

               
               {errors.usuario && (
                    <p className={estilos.messageErro}>{errors.usuario.message}</p>
                )}
                <input 
                    {...register('usuario')}
                    className={estilos.campo}
                    placeholder="Usuário" 
                />
                
                {errors.senha && (
                    <p className={estilos.messageErro}>{errors.senha.message}</p>
                )}
                <input   
                    {...register('senha')}                  
                    className={estilos.campo}
                    placeholder="Senha"
                />
                

                <button 
                    className={estilos.botao}
                >Confirmar</button>

            </form>

        </div>
    )
}


// o register é a forma de identificação de cada um dos campos que a gente vai usar
// ou seja, de cada input, e atraves do data temos acesso ao que está dentro dos 
//inputs identificados