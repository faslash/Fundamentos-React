import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    let nome = 'Teste'
    let idade = 10
    let nerd = true

    function fornecerInformacoes(nome, idade, nerd){
        console.log(nome, idade, nerd)
    }
    
    return (
        <div>
            <div>
                <span>{nome}</span>
                <span>{idade}</span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}