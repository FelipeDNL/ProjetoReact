import React, { useState } from 'react'
import usarNavegacaoTeclado from '../../../hooks/usarNavegacaoTeclado';
import { Link, useNavigate } from 'react-router-dom';

function OpcoesProjetosJava({ setProjetoSelecionado }) {
    const navigate = useNavigate();
    const [numSelecionado, setNumSelecionado] = useState(0);

    const usarTeclado = (index) => {
        if (index === 0) {
            navigate(-1);
        } else if (index === 1) {
            setProjetoSelecionado('projetoJava1');
        } else if (index === 2) {
            setProjetoSelecionado('projetoJava2');
        } else if (index === 3) {
            setProjetoSelecionado('projetoJava3');
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
                onClick={() => setProjetoSelecionado('projetoJava1')}
                onMouseEnter={() => setNumSelecionado(1)}
            >
                /projetoJava1.html
            </div>

            <div
                className={`op2 ${numSelecionado === 2 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projetoJava2')}
                onMouseEnter={() => setNumSelecionado(2)}
            >
                /projetoJava2.html
            </div>

            <div
                className={`op3 ${numSelecionado === 3 ? 'selected' : ''}`}
                onClick={() => setProjetoSelecionado('projetoJava3')}
                onMouseEnter={() => setNumSelecionado(3)}
            >
                /projetoJava3.html
            </div>
        </>
    )
}

export default OpcoesProjetosJava