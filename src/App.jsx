import './App.css'
import React from 'react'

import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card';

export default props => {
    return (
        <div className="App">
            <h1>Fundamentos React (arrow)</h1>

            <div className="Cards">
            
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro"></FamiliaMembro>
                        <FamiliaMembro nome="Ana"></FamiliaMembro>
                        <FamiliaMembro nome="Gustavo" ></FamiliaMembro>
                    </Familia>
                </Card>


                <Card titulo="Desafio Aleatorio" color="#FA6900">
                    <Aleatorio min={1} max={10} />
                </Card>

                <Card titulo="Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="Com Parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno" aluno="Pedro Silva"
                        nota={9.3} />
                </Card>

                <Card titulo="Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}