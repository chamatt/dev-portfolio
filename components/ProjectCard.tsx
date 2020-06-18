import React, { useState, useRef } from "react";

import Image from "./Image";
import { IGithubRepo } from "../lib/githubRepos";

interface Props {
  repo: IGithubRepo;
}
const ProjectCard: React.FC<Props> = ({ repo }) => {
  return (
    <a href={repo.url} className="cursor-pointer w-full">
      <Image path={repo.thumbnail} />

      <div className="relative bg-accent shadow-lg p-4 -mt-12 m-4 text-darkgray dark:text-white">
        <div className="flex items-center fill-current">
          <svg
            aria-hidden="true"
            className="mr-3"
            height=" 20"
            role="img"
            viewBox="0 0 12 16"
            width="20"
          >
            <path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
          </svg>
          <p className="text-3xl font-bold hover:underline truncate">
            {repo?.name}
          </p>
        </div>
        <div>
          <p className="text-lg truncate-3-lines">{repo?.description}</p>
        </div>
        <GithubFooter repo={repo} />
      </div>
    </a>
  );
};

interface GithubFooterProps {
  repo: IGithubRepo;
}

const GithubFooter: React.FC<GithubFooterProps> = ({ repo }) => {
  return (
    <div className="flex flex-row items-center mt-2 text-gray-700 dark:text-gray-500 text-sm h-6">
      <span className="flex items-center mr-2">
        <div
          style={{ backgroundColor: repo.color }}
          className="w-2 h-2 rounded-full mr-1"
        ></div>
        <p>{repo.language}</p>
      </span>
      <span className="flex items-center mx-2">
        <svg
          aria-hidden="true"
          className=" mx-1"
          height="16"
          role="img"
          viewBox="0 0 10 16"
          width="10"
          fill="rgb(106, 115, 125)"
        >
          <path
            fillRule="evenodd"
            d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
          ></path>
        </svg>
        <p>{repo.forks}</p>
      </span>
      <span className="flex items-center mx-2">
        <svg
          aria-hidden="true"
          className="mx-1"
          height="16"
          role="img"
          viewBox="0 0 14 16"
          width="14"
          fill="rgb(106, 115, 125)"
        >
          <path
            fillRule="evenodd"
            d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
          ></path>
        </svg>
        <p>{repo.stars}</p>
      </span>
    </div>
  );
};

export default ProjectCard;
