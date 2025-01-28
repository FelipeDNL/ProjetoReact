import React, { useState } from 'react'
import './OpcoesProjetos.css'
import usarNavegacaoTeclado from '../../../hooks/usarNavegacaoTeclado';
import { Link, useNavigate } from 'react-router-dom';
import usarGithubOctoKitRepos from '../../../hooks/usarGithubOctoKitRepos';

function OpcoesProjetos({ setProjetoSelecionado }) {
    const navigate = useNavigate();
    const [numSelecionado, setNumSelecionado] = useState(-1);
    const [indiceAtivo, setIndiceAtivo] = useState(null);

    const { repos, loading, error } = usarGithubOctoKitRepos('FelipeDNL');

    const usarTeclado = (index) => {
        setIndiceAtivo(index);
        setTimeout(() => setIndiceAtivo(null), 50); // 50ms

        if (index === 0) {
            navigate(-1);
        } else if (repos[index - 1]) {
            setProjetoSelecionado(repos[index - 1].name);
        }
    };

    usarNavegacaoTeclado(repos.length + 1, usarTeclado, numSelecionado, setNumSelecionado);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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

            {repos.map((repo, index) => (
                <div
                    key={repo.id}
                    className={`op ${numSelecionado === index + 1 ? 'selected' : ''} ${indiceAtivo === index + 1 ? 'active' : ''}`}
                    onClick={() => setProjetoSelecionado(repo.name)}
                    onMouseEnter={() => setNumSelecionado(index + 1)}
                >
                    {repo.name}
                </div>
            ))}

        </div>
    )
}

export default OpcoesProjetos