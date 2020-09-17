import React from 'react'

import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default props => {
    return (
        <div id="app">
            <h1>Fundamentos React (arrow)</h1>
            <Aleatorio min={1} max={10}/>
            <Fragmento />
            <ComParametro
                titulo="Situação do Aluno" aluno="PedroSilva"
                nota={9.3} />
            <Primeiro></Primeiro>
        </div>
    )
}