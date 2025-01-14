import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './OpcoesIniciais.css'
import usarNavegacaoTeclado from '../../../hooks/usarNavegacaoTeclado'

function OpcoesIniciais({ setOpcaoSelecionada }) {
    const navigate = useNavigate();
    const [numSelecionado, setNumSelecionado] = useState(0);

    const usarTeclado = (index) => {
        if (index === 0) {
            setOpcaoSelecionada('bemVindo.html');
        } else if (index === 1) {
            setOpcaoSelecionada('sobre.html');
        } else if (index === 2) {
            navigate('/projetos');
            setOpcaoSelecionada('projetos');
        }
    }

    usarNavegacaoTeclado(3, usarTeclado, numSelecionado, setNumSelecionado);
    //passando numero de opcoes, função que será executada ao pressionar enter, numero da opção selecionada e função para setar a opção selecionada

    return (
        <div className='opcoes-iniciais'>
            <div
                className={`op1 ${numSelecionado === 0 ? 'selected' : ''}`}
                onClick={() => {setOpcaoSelecionada('bemVindo.html'), setUpdateLocal('projetos')} }
                onMouseEnter={() => setNumSelecionado(0)}
            >
                /bemVindo.html
            </div>

            <div
                className={`op2 ${numSelecionado === 1 ? 'selected' : ''}`}
                onClick={() => setOpcaoSelecionada('sobre.html')}
                onMouseEnter={() => setNumSelecionado(1)}
            >
                /sobreMim.html
            </div>

            <Link to='/projetos'>
                <div
                    className={`op3 ${numSelecionado === 2 ? 'selected' : ''}`}
                    onClick={() => setOpcaoSelecionada('projetos')}
                    onMouseEnter={() => setNumSelecionado(2)}
                >
                    /meusProjetos
                </div>
            </Link>
        </div>
    )
}

export default OpcoesIniciais