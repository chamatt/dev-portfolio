import githubColors from "../assets/github-colors.json";
import { getProjects } from "./projects";

export interface IGithubRepo {
  url: string;
  name: string;
  description: string;
  owner: { login: string; url: string };
  language: string;
  stars: number;
  size: number;
  homepage: string;
  watchers: number;
  forks: number;
  color: string;
  thumbnail: string | null;
  order: number;
}

interface ProjectsFile {
  repo?: string;
  thumbnail?: string;
  order?: number;
}
const getGithubRepos = async (repoLinks: string[]): Promise<IGithubRepo[]> => {
  const projectsDir = await getProjects();

  const repos = projectsDir.map(({ repo, thumbnail, order }: any) => {
    const [owner, repository] = repo.split("/").slice(-2);
    return {
      meta: { owner, repository },
      thumbnail: thumbnail || null,
      order: order || 99,
    };
  });

  const endpoint = (owner: string, repo: string) =>
    `https://api.github.com/repos/${owner}/${repo}`;
  const reposInfo = await Promise.all(
    repos?.map(({ meta: { owner, repository }, thumbnail, order }) =>
      fetch(endpoint(owner, repository))
        .then((r) => r.json())
        .then((response) => ({
          ...response,
          additional: {
            thumbnail,
            order,
          },
        }))
    )
  );

  const formatted: IGithubRepo[] = reposInfo.map(
    ({
      html_url: url,
      description,
      owner,
      name,
      language,
      stargazers_count: stars,
      size,
      homepage,
      watchers,
      forks_count: forks,
      additional: { thumbnail, order },
    }) => ({
      url,
      description,
      owner: { login: owner.login, url: owner.html_url },
      name,
      language,
      stars,
      size,
      homepage,
      watchers,
      forks,
      color: githubColors[language]?.color || "gray",
      thumbnail,
      order,
    })
  );
  return formatted;
};
export default getGithubRepos;
