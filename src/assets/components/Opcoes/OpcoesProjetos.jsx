import React, { useState } from 'react'
import './OpcoesProjetos.css'
import usarNavegacaoTeclado from '../../../hooks/usarNavegacaoTeclado';
import { Link, useNavigate } from 'react-router-dom';

function OpcoesProjetos({ setProjetoSelecionado }) {
    const navigate = useNavigate();
    const [numSelecionado, setNumSelecionado] = useState(0);

    const usarTeclado = (index) => {
        if (index === 0) {
            navigate(-1);
        } else if (index === 1) {
            setProjetoSelecionado('projeto1');
        } else if (index === 2) {
            setProjetoSelecionado('projeto2');
        } else if (index === 3) {
            setProjetoSelecionado('projeto3');
        } else if (index === 4) {
            navigate('/projetos/java');
            setProjetoSelecionado('java');
        }
    }

    usarNavegacaoTeclado(4 + 1, usarTeclado, numSelecionado, setNumSelecionado);

    return (
        <>
            <Link to='/'>
                <div
                    className={`opVoltar ${numSelecionado === 0 ? 'selected' : ''}`}
                    onClick={() => setProjetoSelecionado('projeto1')}
                    onMouseEnter={() => setNumSelecionado(0)}
                >
                    ...<small>(voltar)</small>
                </div>
            </Link>

            <div
                className={`op1 ${numSelecionado === 1 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projeto1')}
                onMouseEnter={() => setNumSelecionado(1)}
            >
                /projeto1.html
            </div>

            <div
                className={`op2 ${numSelecionado === 2 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projeto2')}
                onMouseEnter={() => setNumSelecionado(2)}
            >
                /projeto2.html
            </div>

            <div
                className={`op3 ${numSelecionado === 3 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projeto3')}
                onMouseEnter={() => setNumSelecionado(3)}
            >
                /projeto3.html
            </div>
            
            <Link to='/projetos/java'>
                <div
                    className={`opJava ${numSelecionado === 4 ? 'selected' : ''}`}
                    onMouseEnter={() => setNumSelecionado(4)}
                >
                    /java
                </div>
            </Link>
        </>
    )
}

export default OpcoesProjetos