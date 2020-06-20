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
const getGithubRepos = async (): Promise<IGithubRepo[]> => {
  const projectsDir = await getProjects();

  const repos = projectsDir.map(({ repo, thumbnail, order }: any) => {
    const [owner, repository] = repo.split("/").slice(-2);
    return {
      meta: { owner, repository },
      thumbnail: thumbnail || null,
      order: order || 99,
    };
  });

  try {
    const endpoint = (owner: string, repo: string) =>
      `https://api.github.com/repos/${owner}/${repo}`;
    const reposInfo = await Promise.all(
      repos?.map(({ meta: { owner, repository }, thumbnail, order }) => {
        if (process.env.NODE_ENV === "development") {
          return fakeAPI.get(owner, repository, thumbnail, order);
        }

        return fetch(endpoint(owner, repository))
          .then((r) => r.json())
          .then((response) => ({
            ...response,
            additional: {
              thumbnail,
              order,
            },
          }))
      })
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
        owner: { login: owner?.login, url: owner?.html_url },
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
  }
  catch (err) {
    return null;
  }
};


const fakeAPI = {
  get: (owner: string, repo: string, thumbnail: string, order: number = 1) => {
    return {
      "id": 252380529,
      "node_id": "MDEwOlJlcG9zaXRvcnkyNTIzODA1Mjk=",
      "name": repo,
      "full_name": owner + "/" + repo,
      "private": false,
      "owner": {
        "login": owner,
        "id": 1111111,
        "node_id": "MDQ6VXNlcjIwMzQ0MzQ4",
        "avatar_url": "https://avatars0.githubusercontent.com/u/20344348?v=4",
        "gravatar_id": "",
        "url": `https://api.github.com/users/${owner}`,
        "html_url": `https://github.com/${owner}`,
        "followers_url": `https://api.github.com/users/${owner}/followers`,
        "following_url": `https://api.github.com/users/${owner}/following{/other_user}`,
        "gists_url": `https://api.github.com/users/${owner}/gists{/gist_id}`,
        "starred_url": `https://api.github.com/users/${owner}/starred{/owner}{/repo}`,
        "subscriptions_url": `https://api.github.com/users/${owner}/subscriptions`,
        "organizations_url": `https://api.github.com/users/${owner}/orgs`,
        "repos_url": `https://api.github.com/users/${owner}/repos`,
        "events_url": `https://api.github.com/users/${owner}/events{/privacy}`,
        "received_events_url": `https://api.github.com/users/${owner}/received_events`,
        "type": "User",
        "site_admin": false
      },
      "html_url": `https://github.com/${owner}/${repo}`,
      "description": `A github project description placeholder for development purposes`,
      "fork": false,
      "url": `https://api.github.com/repos/${owner}/${repo}`,
      "forks_url": `https://api.github.com/repos/${owner}/${repo}/forks`,
      "keys_url": `https://api.github.com/repos/${owner}/${repo}/keys{/key_id}`,
      "collaborators_url": `https://api.github.com/repos/${owner}/${repo}/collaborators{/collaborator}`,
      "teams_url": `https://api.github.com/repos/${owner}/${repo}/teams`,
      "hooks_url": `https://api.github.com/repos/${owner}/${repo}/hooks`,
      "issue_events_url": `https://api.github.com/repos/${owner}/${repo}/issues/events{/number}`,
      "events_url": `https://api.github.com/repos/${owner}/${repo}/events`,
      "assignees_url": `https://api.github.com/repos/${owner}/${repo}/assignees{/user}`,
      "branches_url": `https://api.github.com/repos/${owner}/${repo}/branches{/branch}`,
      "tags_url": `https://api.github.com/repos/${owner}/${repo}/tags`,
      "blobs_url": `https://api.github.com/repos/${owner}/${repo}/git/blobs{/sha}`,
      "git_tags_url": `https://api.github.com/repos/${owner}/${repo}/git/tags{/sha}`,
      "git_refs_url": `https://api.github.com/repos/${owner}/${repo}/git/refs{/sha}`,
      "trees_url": `https://api.github.com/repos/${owner}/${repo}/git/trees{/sha}`,
      "statuses_url": `https://api.github.com/repos/${owner}/${repo}/statuses/{sha}`,
      "languages_url": `https://api.github.com/repos/${owner}/${repo}/languages`,
      "stargazers_url": `https://api.github.com/repos/${owner}/${repo}/stargazers`,
      "contributors_url": `https://api.github.com/repos/${owner}/${repo}/contributors`,
      "subscribers_url": `https://api.github.com/repos/${owner}/${repo}/subscribers`,
      "subscription_url": `https://api.github.com/repos/${owner}/${repo}/subscription`,
      "commits_url": `https://api.github.com/repos/${owner}/${repo}/commits{/sha}`,
      "git_commits_url": `https://api.github.com/repos/${owner}/${repo}/git/commits{/sha}`,
      "comments_url": `https://api.github.com/repos/${owner}/${repo}/comments{/number}`,
      "issue_comment_url": `https://api.github.com/repos/${owner}/${repo}/issues/comments{/number}`,
      "contents_url": `https://api.github.com/repos/${owner}/${repo}/contents/{+path}`,
      "compare_url": `https://api.github.com/repos/${owner}/${repo}/compare/{base}...{head}`,
      "merges_url": `https://api.github.com/repos/${owner}/${repo}/merges`,
      "archive_url": `https://api.github.com/repos/${owner}/${repo}/{archive_format}{/ref}`,
      "downloads_url": `https://api.github.com/repos/${owner}/${repo}/downloads`,
      "issues_url": `https://api.github.com/repos/${owner}/${repo}/issues{/number}`,
      "pulls_url": `https://api.github.com/repos/${owner}/${repo}/pulls{/number}`,
      "milestones_url": `https://api.github.com/repos/${owner}/${repo}/milestones{/number}`,
      "notifications_url": `https://api.github.com/repos/${owner}/${repo}/notifications{?since,all,participating}`,
      "labels_url": `https://api.github.com/repos/${owner}/${repo}/labels{/name}`,
      "releases_url": `https://api.github.com/repos/${owner}/${repo}/releases{/id}`,
      "deployments_url": `https://api.github.com/repos/${owner}/${repo}/deployments`,
      "created_at": `2020-04-02T07:05:13Z`,
      "updated_at": `2020-05-20T11:28:09Z`,
      "pushed_at": `2020-05-18T22:30:49Z`,
      "git_url": `git://github.com/${owner}/${repo}.git`,
      "ssh_url": `git@github.com:chamatt/${repo}.git`,
      "clone_url": `https://github.com/${owner}/${repo}.git`,
      "svn_url": `https://github.com/${owner}/${repo}`,
      "homepage": null,
      "size": 5322,
      "stargazers_count": 4,
      "watchers_count": 4,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 1,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 1,
      "license": null,
      "forks": 1,
      "open_issues": 1,
      "watchers": 4,
      "default_branch": "master",
      "temp_clone_token": null,
      "network_count": 1,
      "subscribers_count": 1,
      additional: {
        thumbnail,
        order,
      },
    }
  }
}

export default getGithubRepos;
