import React from 'react'
import usarGithubOctoKitRepos from '../../../hooks/usarGithubOctoKitRepos';

function Projetos({ projetoSelecionado }) {

  const { repos, loading, error } = usarGithubOctoKitRepos('FelipeDNL');

  return (
    <div className='container-projetos'>
      <div className='opcoes-projetos'>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {repos.map((repo, index) => (
          <div
            key={repo.id}
            className={`op ${projetoSelecionado === repo.name ? 'selected' : ''}`}
          >
            {repo.readme}
          </div>
        ))}
      </div>
    </div>


  )
}

export default Projetos