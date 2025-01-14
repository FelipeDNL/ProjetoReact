import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './QuadroOpcoes.css'

import OpcoesProjetos from '../Opcoes/OpcoesProjetos'
import OpcoesIniciais from '../Opcoes/OpcoesIniciais'

function QuadroOpcoes({ setOpcaoSelecionada, setProjetoSelecionado }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='quadro-opcoes'>

            <div className='local-div'>
                <div className='local'>
                    C:{location.pathname}
                </div>
            </div>

            <div className='opcoes'>
                {location.pathname === '/projetos' ? (
                    <OpcoesProjetos setProjetoSelecionado={setProjetoSelecionado} />
                ) : (
                    <OpcoesIniciais setOpcaoSelecionada={setOpcaoSelecionada} />
                )}
            </div>

        </div>
    )
}

export default QuadroOpcoes