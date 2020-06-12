import React from "react";

interface Props {
  imagePath: string;
  title: string;
  description: string;
}
const BlogCard: React.FC<Props> = ({
  title = "",
  description = "",
  imagePath,
}) => {
  return (
    <div className="cursor-pointer border-2 border-black dark:border-white items-center">
      <div className="flex flex-row p-4">
        <div className="w-16 h-16 lg:w-24 lg:h-24">
          <div className="sm:h-6 lg:h-0"></div>
          <img
            className="object-contain w-full"
            src={require(`../assets/${imagePath}?resize&size=100`).src}
          ></img>
        </div>
        <div className="flex-1 pl-4">
          <div className="text-gray-500">Jun 10 * 10 min read</div>
          <div className="font-bold text-xl lg:text-2xl hover:underline">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
