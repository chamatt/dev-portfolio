import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import BlogCard from "./BlogCard";
import { Button } from "./Button";

interface Props {
  title: string;
  subtitle: string;
  posts?: {
    title?: string;
    isoDate?: string;
    link?: string;
    guid?: string;
    thumbnail?: string;
  }[];
}

const BlogSection: React.FC<Props> = ({ title, subtitle, posts = [] }) => {
  return (
    <div className="bg-gray-0 py-10 sm:py-20 bg-accent">
      <Container as="section">
        <div className="flex flex-row justify-between">
          <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
        </div>
        <div className="py-20">
          <div className="grid grid-cols-2 gap-4">
            {posts.map((blog) => {
              return (
                <div key={blog.guid} className="col-span-2 sm:col-span-1">
                  <BlogCard {...blog} />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end pt-10">
            <form>
              <Button
                as="a"
                href="https://medium.com/@matt.vicent"
                size="small"
                variant="secondary"
                className="h-16 px-8"
              >
                Read more
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
