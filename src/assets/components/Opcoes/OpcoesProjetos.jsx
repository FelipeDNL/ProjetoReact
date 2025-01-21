import React, { useState } from 'react'
import './OpcoesProjetos.css'
import usarNavegacaoTeclado from '../../../hooks/usarNavegacaoTeclado';
import { Link, useNavigate } from 'react-router-dom';

function OpcoesProjetos({ setProjetoSelecionado }) {
    const navigate = useNavigate();
    const [numSelecionado, setNumSelecionado] = useState(-1);
    const [indiceAtivo, setIndiceAtivo] = useState(null);

    const usarTeclado = (index) => {
        setIndiceAtivo(index);
        setTimeout(() => setIndiceAtivo(null), 50); // 50ms

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
        <div className='opcoes-projetos'>
            <Link to='/'>
                <div
                    className={`opVoltar ${numSelecionado === 0 ? 'selected' : ''} ${indiceAtivo === 0 ? 'active' : ''}`}
                    onClick={() => setProjetoSelecionado('projeto1')}
                    onMouseEnter={() => setNumSelecionado(0)}
                >
                    ...<small>(voltar)</small>
                </div>
            </Link>

            <div
                className={`op1 ${numSelecionado === 1 ? 'selected' : ''} ${indiceAtivo === 1 ? 'active' : ''}`}
                onClick={() => setProjetoSelecionado('projeto1')}
                onMouseEnter={() => setNumSelecionado(1)}
            >
                /projeto1.html
            </div>

            <div
                className={`op2 ${numSelecionado === 2 ? 'selected' : ''} ${indiceAtivo === 2 ? 'active' : ''}`}
                onClick={() => setProjetoSelecionado('projeto2')}
                onMouseEnter={() => setNumSelecionado(2)}
            >
                /projeto2.html
            </div>

            <div
                className={`op3 ${numSelecionado === 3 ? 'selected' : ''} ${indiceAtivo === 3 ? 'active' : ''}`}
                onClick={() => setProjetoSelecionado('projeto3')}
                onMouseEnter={() => setNumSelecionado(3)}
            >
                /projeto3.html
            </div>

            <Link to='/projetos/java'>
                <div
                    className={`opJava ${numSelecionado === 4 ? 'selected' : ''} ${indiceAtivo === 4 ? 'active' : ''}`}
                    onMouseEnter={() => setNumSelecionado(4)}
                >
                    /java
                </div>
            </Link>
        </div>
    )
}

export default OpcoesProjetos