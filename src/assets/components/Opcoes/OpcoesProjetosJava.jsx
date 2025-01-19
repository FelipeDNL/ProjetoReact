import React, { useState } from 'react'
import usarNavegacaoTeclado from '../../../hooks/usarNavegacaoTeclado';
import { Link } from 'react-router-dom';

function OpcoesProjetosJava({ setProjetoSelecionado }) {
    const [numSelecionado, setNumSelecionado] = useState(0);

    const usarTeclado = (index) => {
        if (index === 0) {
            setProjetoSelecionado('projetoJava1.html');
        } else if (index === 1) {
            setProjetoSelecionado('projetoJava2.html');
        } else if (index === 2) {
            setProjetoSelecionado('projetoJava3.html');
        }
    }

    usarNavegacaoTeclado(4, usarTeclado, numSelecionado, setNumSelecionado);

    return (
        <>
            <Link to='/projetos'>
                <div
                    className={`opVoltar ${numSelecionado === 0 ? 'selected' : ''}`}
                    onClick={() => setProjetoSelecionado('')}
                    onMouseEnter={() => setNumSelecionado(0)}
                >
                    ...<small>(voltar)</small>
                </div>
            </Link>
            
            <div
                className={`op1 ${numSelecionado === 1 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projetoJava1.html')}
                onMouseEnter={() => setNumSelecionado(1)}
            >
                /projetoJava1.html
            </div>

            <div
                className={`op2 ${numSelecionado === 2 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projetoJava2.html')}
                onMouseEnter={() => setNumSelecionado(2)}
            >
                /projetoJava2.html
            </div>

            <div
                className={`op3 ${numSelecionado === 3 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projetoJava3.html')}
                onMouseEnter={() => setNumSelecionado(3)}
            >
                /projetoJava3.html
            </div>
        </>
    )
}

export default OpcoesProjetosJava