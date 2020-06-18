import Parser from "rss-parser";
let parser = new Parser();

export interface IBlogPost {
  title?: string;
  isoDate?: string;
  link?: string;
  guid?: string;
  thumbnail?: string;
}

const feedParser = async (username: string): Promise<IBlogPost[]> => {
  const feed = await parser
    .parseURL(`https://medium.com/feed/@${username}`)
    .then((data) => {
      // Fillter the array
      const res = data.items; //This is an array with the content. No feed, no info about author etc..
      const posts = res.filter((item) => item.categories.length > 0); // That's the main trick* !
      return posts;
    });

  const feedMin: IBlogPost[] = feed.map((blog) => ({
    title: blog?.title ?? null,
    isoDate: blog?.isoDate ?? null,
    link: blog?.link ?? null,
    guid: blog?.guid ?? null,
    thumbnail: blog?.thumbnail ?? null,
  }));

  return feedMin;
};

export default feedParser;
