import React, { useEffect, useState} from 'react'
import { Octokit } from '@octokit/rest'

function usarGithubOctokitRepos(username, token) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const octokit = new Octokit({
      auth: import.meta.env.VITE_GITHUB_TOKEN,
    });

    const fetchRepos = async () => {
      try {
        const response = await octokit.repos.listForUser({
          username: username,
          per_page: 100 // Número máximo de repositórios por página
        });
    
        const repos = response.data;
        repos.forEach(repo => {
          console.log(repo.name);
        });

        setRepos(repos);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, token]);

  return { repos, loading, error };
}

export default usarGithubOctokitRepos