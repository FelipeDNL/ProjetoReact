import React from 'react'
import { useLocation } from 'react-router-dom'
import './QuadroOpcoes.css'

import OpcoesProjetos from '../Opcoes/OpcoesProjetos'
import OpcoesIniciais from '../Opcoes/OpcoesIniciais'
import OpcoesProjetosJava from '../Opcoes/OpcoesProjetosJava'

function QuadroOpcoes({ setOpcaoSelecionada, setProjetoSelecionado }) {
    const location = useLocation();

    const opcoesMap ={
        '/': <OpcoesIniciais setOpcaoSelecionada={setOpcaoSelecionada} />,
        '/projetos': <OpcoesProjetos setProjetoSelecionado={setProjetoSelecionado} />,
        '/projetos/java': <OpcoesProjetosJava setProjetoSelecionado={setProjetoSelecionado} />
    }

    return (
        <div className='quadro-opcoes'>

            <div className='local-div'>
                <div className='local'>
                    C:{location.pathname}
                </div>
            </div>

            <div className='opcoes'>
                {opcoesMap[location.pathname] || <OpcoesIniciais setOpcaoSelecionada={setOpcaoSelecionada} />}
            </div>

        </div>
    )
}

export default QuadroOpcoes