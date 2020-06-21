import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import FooterCredits from "../components/FooterCredits";
import AboutMe from "../components/AboutMe";
import { GetStaticProps } from "next";
import feedParser, { IBlogPost } from "../lib/feedParser";
import getGithubRepos, { IGithubRepo } from "../lib/githubRepos";
import Parser from "rss-parser";
import AOS from "aos";
import { useEffect } from "react";
import Container from "../components/Container";
import ExpandAccordionGrid from "../components/ExpandAccordionGrid";
import ProfessionalSection from "../components/ProfessionalSection";

let parser = new Parser();

interface HomeProps {
  blogPosts: IBlogPost[];
  githubRepos: IGithubRepo[];
}

export default function Home({ blogPosts, githubRepos }: HomeProps) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <ProjectsSection
        title="personal"
        subtitle="projects"
        repos={githubRepos}
      />
      <ProfessionalSection />
      <BlogSection title="blog" subtitle="posts" posts={blogPosts} />
      <FooterCredits />
    </div>
  );
}

export const getStaticProps = async (ctx: GetStaticProps) => {
  const feed = await feedParser("matt.vicent");

  const githubRepos = await getGithubRepos();

  return {
    props: {
      blogPosts: feed,
      githubRepos: githubRepos || null,
    },
  };
};
