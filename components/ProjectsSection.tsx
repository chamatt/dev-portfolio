import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { Button } from "./Button";

interface Props {
  title: string;
  subtitle: string;
}

const ProjectsSection: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="bg-gray-0 py-10 sm:py-20">
      <Container as="section">
        <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
        <div className="py-10 sm:py-20">
          <div className="flex flex-col sm:flex-row grid grid-cols-12 gap-8">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ProjectCard
                imagePath="project-resources.jpg"
                title="NativeGram"
                description="Keep track of your spending and start budgeting"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ProjectCard
                imagePath="project-resources.jpg"
                title="NativeGram"
                description="Keep track of your spending and start budgeting"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ProjectCard
                imagePath="project-fortnite.jpg"
                title="Finance App"
                description="Keep track of your spending and start budgeting"
              />
            </div>
          </div>
          <div className="flex justify-end pt-10">
            <Button size="small" variant="secondary" className="h-16 px-8">
              MORE PROJECTS
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
