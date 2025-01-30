import React, { useEffect, useState } from 'react'
import { Octokit } from '@octokit/rest'

function usarGithubOctokitRepos(username, token) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    // autenticado com token de acesso pessoal
    // não é necessário mas aumenta o limite de requisições
    const octokit = new Octokit({
      auth: import.meta.env.VITE_GITHUB_TOKEN,
    });

    // função assíncrona para buscar os repositórios
    const fetchRepos = async () => {
      try {

        // busca os repositórios do usuário [username]
        const response = await octokit.repos.listForUser({
          username
        });

        // mapeia os nomes dos repositórios
        const repoNames = response.data.map(repo => repo.name);

        // atualiza o estado com os nomes dos repositórios
        setRepos(repoNames);

      } catch (err) {
        setError(err);

      } finally { // finally é executado independente de erro ou sucesso
        setLoading(false);
      }
    };

    // chama a função para buscar os repositórios
    fetchRepos();
    
  }, [username, token]);// executa o efeito sempre que o username ou token mudar

  return { repos, loading, error };
}

export default usarGithubOctokitRepos