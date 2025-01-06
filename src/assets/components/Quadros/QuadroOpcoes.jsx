import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './QuadroOpcoes.css'

function QuadroOpcoes({ setOpcaoSelecionada }) {
    const navigate = useNavigate();
    const [esconderMenu, setEsconderMenu] = useState(false);
    const [updateLocal, setUpdateLocal] = useState('');

    const handleVoltar = () => {
        setEsconderMenu(false);
        navigate(-1); // Volta para a página anterior
    };

    return (
        <div className='quadro-opcoes'>

            <div className='local-div'>
                <div className='local'>
                    C:/{updateLocal}
                </div>
            </div>

            <div className='opcoes'>
                <div className={`opcoes-menu ${esconderMenu ? 'esconder' : ''}`}>
                    <div className='op1' onClick={() => setOpcaoSelecionada('bemVindo.html')}>bemVindo.html</div>
                    <div className='op2' onClick={() => setOpcaoSelecionada('sobre.html')}>sobre.html</div>
                    <Link
                        to='/projetos'
                        className='op3'
                        onClick={() => {
                            setOpcaoSelecionada('projetos');
                            setEsconderMenu(true);
                            setUpdateLocal('projetos');
                        }}>
                        /projetos
                    </Link>
                </div>

                {esconderMenu &&
                    <div className='opVoltar'
                        onClick={() => {
                            handleVoltar();
                            setUpdateLocal('');
                        }}>
                        ...<small>(voltar)</small>
                    </div>
                }

            </div>
        </div>
    )
}

export default QuadroOpcoes