import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

interface Props {
  title: string;
  subtitle: string;
}

const ProjectsSection: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="bg-gray-0 py-20">
      <Container as="section">
        <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
        <div className="flex flex-col sm:flex-row py-20 overflow-hidden">
          <ProjectCard
            imagePath="project-resources.jpg"
            title="Finance App"
            description="Keep track of your spending and start budgeting"
          />
          <div className="w-8 mb-8" />
          <ProjectCard
            imagePath="project-fortnite.jpg"
            title="Finance App"
            description="Keep track of your spending and start budgeting"
          />
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
