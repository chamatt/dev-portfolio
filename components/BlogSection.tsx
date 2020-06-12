import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import BlogCard from "./BlogCard";
import { Button } from "./Button";

interface Props {
  title: string;
  subtitle: string;
}

const BlogSection: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="bg-gray-0 py-20">
      <Container as="section">
        <div className="flex flex-row justify-between">
          <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
          <Button size="small" variant="secondary" className="h-16 px-8">
            Read more
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 py-20">
          <div className="col-span-2 sm:col-span-1">
            <BlogCard
              image="https://images.weserv.nl/?url=https://cdn.dribbble.com/users/427857/screenshots/12017499/media/698081f93f9dff585379b74552a5fa49.jpg&w=1000&h=1000&a=entropy&fit=cover"
              title="Jun 10 * 10 min read"
              description="What languages and tools do you use that spark joy?"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <BlogCard
              image="https://images.weserv.nl/?url=https://cdn.dribbble.com/users/257709/screenshots/11999759/media/bd85b901d1f8a3355a2a3dd9a06facf2.png&w=1000&h=1000&a=entropy&fit=cover"
              title="Jun 10 * 10 min read"
              description="What languages and tools do you use that spark joy?"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
