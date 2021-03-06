import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import BlogCard from "../components/BlogCard";
import { Button } from "../components/Button";
import { IBlogPost } from "../lib/feedParser";
import { Element } from "react-scroll";

interface Props {
  title: string;
  subtitle: string;
  posts?: IBlogPost[];
}

const BlogSection: React.FC<Props> = ({ title, subtitle, posts = [] }) => {
  return (
    <Element name="blog-section">
      <div className="bg-gray-0 py-10 sm:py-20 bg-default">
        <Container as="section" id="blog-section">
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
    </Element>
  );
};

export default BlogSection;
