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
          username
        });
        const reposWithReadme = await Promise.all(response.data.map(async (repo) => {
          const readmeResponse = await octokit.repos.getReadme({
            owner: username,
            repo: repo.name,
          });
          const readmeContent = atob(readmeResponse.data.content);
          return { ...repo, readme: readmeContent };
        }));
        setRepos(reposWithReadme);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, token]);

  return { repos, loading, error };
}

export default usarGithubOctokitRepos