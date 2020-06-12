import Head from "next/head";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection title="personal" subtitle="projects" />
      <BlogSection title="blog" subtitle="posts" />
    </div>
  );
}
