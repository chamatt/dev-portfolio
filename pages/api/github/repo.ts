// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { repo, owner },
  } = req;

  res.setHeader("Cache-Control", "s-maxage=1200");

  const data = await fetch(
    `https://api.github.com/repos/${owner}/${repo}`
  ).then((response) => response.json());
  res.status(200).json(data);
};
