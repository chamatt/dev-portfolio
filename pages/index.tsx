import Head from "next/head";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import FooterCredits from "../components/FooterCredits";
import AboutMe from "../components/AboutMe";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import Parser from "rss-parser";
let parser = new Parser();

export default function Home({ blogPosts }) {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <ProjectsSection title="personal" subtitle="projects" />
      <BlogSection title="blog" subtitle="posts" posts={blogPosts} />
      <FooterCredits />
    </div>
  );
}

export const getStaticProps = async (ctx: GetStaticProps) => {
  const feed = await parser
    .parseURL("https://medium.com/feed/@matt.vicent")
    .then((data) => {
      // Fillter the array
      const res = data.items; //This is an array with the content. No feed, no info about author etc..
      const posts = res.filter((item) => item.categories.length > 0); // That's the main trick* !
      return posts;
    });

  const feedMin = feed.map((blog) => ({
    title: blog?.title ?? null,
    isoDate: blog?.isoDate ?? null,
    link: blog?.link ?? null,
    guid: blog?.guid ?? null,
    thumbnail: blog?.thumbnail ?? null,
  }));

  return {
    props: {
      blogPosts: feedMin,
    },
  };
};
