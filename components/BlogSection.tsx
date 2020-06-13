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
    <div className="bg-gray-0 py-10 sm:py-20 bg-accent">
      <Container as="section">
        <div className="flex flex-row justify-between">
          <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
        </div>
        <div className="py-20">
          <div className="grid grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((blog) => {
              return (
                <div key={blog} className="col-span-2 sm:col-span-1">
                  <BlogCard
                    imagePath="project-fortnite.jpg"
                    title="Jun 10 * 10 min read"
                    description="What languages and tools do you use that spark joy?"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end pt-10">
            <Button size="small" variant="secondary" className="h-16 px-8">
              Read more
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
