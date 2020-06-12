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
            image="https://images.weserv.nl/?url=https://cdn.dribbble.com/users/427857/screenshots/12017499/media/698081f93f9dff585379b74552a5fa49.jpg&w=1000&h=1000&a=entropy&fit=cover"
            title="Finance App"
            description="Keep track of your spending and start budgeting"
          />
          <div className="w-8 mb-8" />
          <ProjectCard
            image="https://images.weserv.nl/?url=https://cdn.dribbble.com/users/257709/screenshots/11999759/media/bd85b901d1f8a3355a2a3dd9a06facf2.png&w=1000&h=1000&a=entropy&fit=cover"
            title="Finance App"
            description="Keep track of your spending and start budgeting"
          />
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
