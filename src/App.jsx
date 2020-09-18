import React from 'react'

import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card';

export default props => {
    return (
        <div id="app">
            <h1>Fundamentos React (arrow)</h1>
            <Card titulo="Desafio Aleatorio">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="Com Parâmetro">
                <ComParametro
                    titulo="Situação do Aluno" aluno="PedroSilva"
                    nota={9.3} />
            </Card>

            <Card titulo="Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>

        </div>
    )
}