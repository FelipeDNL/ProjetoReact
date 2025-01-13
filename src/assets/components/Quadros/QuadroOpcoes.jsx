import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './QuadroOpcoes.css'

function QuadroOpcoes({ setOpcaoSelecionada }) {
    const navigate = useNavigate();
    const [esconderMenu, setEsconderMenu] = useState(false);
    const [updateLocal, setUpdateLocal] = useState('');
    const [numSelecionado, setNumSelecionado] = useState(0);

    const handleVoltar = () => {
        setEsconderMenu(false);
        navigate(-1); // Volta para a página anterior
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleVoltar();
        }

        if (event.key === 'ArrowDown') {
            setNumSelecionado((prevOption) => (prevOption + 1) % 3);
            // o resto da divisão por 3 garante que o valor de numSelecionado seja entre 0 1 ou 2
        }

        if (event.key === 'ArrowUp') {
            setNumSelecionado((prevOption) => (prevOption - 1 + 3) % 3);
            // o +3 garante que o valor de numSelecionado seja positivo
        }

        if (event.key === 'Enter') {
            if (numSelecionado === 0) {
                setOpcaoSelecionada('bemVindo.html');
            } else if (numSelecionado === 1) {
                setOpcaoSelecionada('sobre.html');
            } else if (numSelecionado === 2) {
                navigate('/projetos');
                setOpcaoSelecionada('projetos');
                setEsconderMenu(true);
                setUpdateLocal('projetos');
            }
        }

    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);


    return (
        <div className='quadro-opcoes'>

            <div className='local-div'>
                <div className='local'>
                    C:/{updateLocal}
                </div>
            </div>

            <div className='opcoes'>
                <div className={`opcoes-menu ${esconderMenu ? 'esconder' : ''}`}>
                    <div
                        className={numSelecionado === 0 ? 'selected' : ''}
                        id='op1'
                        onClick={() => setOpcaoSelecionada('bemVindo.html')}
                        onMouseEnter={() => setNumSelecionado(0)}
                    >
                        /bemVindo.html
                    </div>

                    <div
                        className={numSelecionado === 1 ? 'selected' : ''}
                        id='op2'
                        onClick={() => setOpcaoSelecionada('sobre.html')}
                        onMouseEnter={() => setNumSelecionado(1)}
                    >
                        /sobreMim.html
                    </div>

                    <div
                        className={numSelecionado === 2 ? 'selected' : ''}
                        id='op3'
                        onMouseEnter={() => setNumSelecionado(3)}
                        onClick={() => {
                            setOpcaoSelecionada('projetos');
                            setEsconderMenu(true);
                            setUpdateLocal('projetos');
                        }}
                    >
                        <Link to='/projetos'> /meusProjetos </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default QuadroOpcoes