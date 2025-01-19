import React, { useState } from 'react'
import './OpcoesProjetos.css'
import usarNavegacaoTeclado from '../../../hooks/usarNavegacaoTeclado';
import { Link } from 'react-router-dom';

function OpcoesProjetos({ setProjetoSelecionado }) {
    const [numSelecionado, setNumSelecionado] = useState(0);

    const usarTeclado = (index) => {
        if (index === 0) {
            setProjetoSelecionado('projeto1.html');
        } else if (index === 1) {
            setProjetoSelecionado('projeto2.html');
        } else if (index === 2) {
            setProjetoSelecionado('projeto3.html');
        }
    }

    usarNavegacaoTeclado(6, usarTeclado, numSelecionado, setNumSelecionado);

    return (
        <>
            <Link to='/'>
                <div
                    className={`opVoltar ${numSelecionado === 0 ? 'selected' : ''}`}
                    onClick={() => setProjetoSelecionado('projeto1.html')}
                    onMouseEnter={() => setNumSelecionado(0)}
                >
                    ...<small>(voltar)</small>
                </div>
            </Link>

            <div
                className={`op1 ${numSelecionado === 1 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projeto1.html')}
                onMouseEnter={() => setNumSelecionado(1)}
            >
                /projeto1.html
            </div>

            <div
                className={`op2 ${numSelecionado === 2 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projeto2.html')}
                onMouseEnter={() => setNumSelecionado(2)}
            >
                /projeto2.html
            </div>

            <div
                className={`op3 ${numSelecionado === 3 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projeto3.html')}
                onMouseEnter={() => setNumSelecionado(3)}
            >
                /projeto3.html
            </div>

            <Link to='/projetos/python'>
                <div
                    className={`opPython ${numSelecionado === 4 ? 'selected' : ''}`}
                    onMouseEnter={() => setNumSelecionado(4)}
                >
                    /python
                </div>
            </Link>

            <Link to='/projetos/java'>
                <div
                    className={`opJava ${numSelecionado === 5 ? 'selected' : ''}`}
                    onMouseEnter={() => setNumSelecionado(5)}
                >
                    /java
                </div>
            </Link>
        </>
    )
}

export default OpcoesProjetos