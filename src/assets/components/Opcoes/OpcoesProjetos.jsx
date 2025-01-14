import React, { useState } from 'react'
import './OpcoesProjetos.css'
import usarNavegacaoTeclado from '../../../hooks/usarNavegacaoTeclado';

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

    usarNavegacaoTeclado(3, usarTeclado, numSelecionado, setNumSelecionado);

    return (
        <>
            <div
                className={`op1 ${numSelecionado === 0 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projeto1.html')}
                onMouseEnter={() => setNumSelecionado(0)}
            >
                /projeto1.html
            </div>

            <div
                className={`op2 ${numSelecionado === 1 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projeto2.html')}
                onMouseEnter={() => setNumSelecionado(1)}
            >
                /projeto2.html
            </div>

            <div
                className={`op3 ${numSelecionado === 2 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projeto3.html')}
                onMouseEnter={() => setNumSelecionado(2)}
            >
                /projeto3.html
            </div>
        </>
    )
}

export default OpcoesProjetos