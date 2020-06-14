import Head from "next/head";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import FooterCredits from "../components/FooterCredits";
import AboutMe from "../components/AboutMe";
import * as HomeMD from "../content/home.md";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";

const { attributes, react: HomeComponent } = HomeMD;

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <ProjectsSection title="personal" subtitle="projects" />
      <BlogSection title="blog" subtitle="posts" />
      <FooterCredits />
      <HomeComponent />
    </div>
  );
}
