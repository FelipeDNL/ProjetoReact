import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './OpcoesIniciais.css'
import usarNavegacaoTeclado from '../../../hooks/usarNavegacaoTeclado'

function OpcoesIniciais({ setOpcaoSelecionada }) {
    const navigate = useNavigate();
    const [numSelecionado, setNumSelecionado] = useState(-1);
    const [indiceAtivo, setIndiceAtivo] = useState(null);

    const usarTeclado = (index) => {
        setIndiceAtivo(index);
        setTimeout(() => setIndiceAtivo(null), 50); // 50ms

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
                className={`op1 ${numSelecionado === 0 ? 'selected' : ''} ${indiceAtivo === 0 ? 'active' : ''}`}
                onClick={() => setOpcaoSelecionada('bemVindo.html')}
                onMouseEnter={() => setNumSelecionado(0)}
            >
                /bemVindo.html
            </div>

            <div
                className={`op2 ${numSelecionado === 1 ? 'selected' : ''} ${indiceAtivo === 1 ? 'active' : ''}`}
                onClick={() => setOpcaoSelecionada('sobre.html')}
                onMouseEnter={() => setNumSelecionado(1)}
            >
                /sobreMim.html
            </div>

            <Link to='/projetos'>
                <div
                    className={`op3 ${numSelecionado === 2 ? 'selected' : ''} ${indiceAtivo === 2 ? 'active' : ''}`}
                    onClick={() => setOpcaoSelecionada('projetos')}
                    onMouseEnter={() => setNumSelecionado(2)}
                >
                    /Projetos
                </div>
            </Link>
        </div>
    )
}

export default OpcoesIniciais