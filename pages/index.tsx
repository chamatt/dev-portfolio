import Head from "next/head";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import FooterCredits from "../components/FooterCredits";
import AboutMe from "../components/AboutMe";
import { attributes, react as HomeContent } from "../content/home.md";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <ProjectsSection title="personal" subtitle="projects" />
      <BlogSection title="blog" subtitle="posts" />
      <FooterCredits />
    </div>
  );
}
