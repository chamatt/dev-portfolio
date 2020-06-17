import React from "react";
import { format, parseISO, isValid } from "date-fns";

interface Props {
  title?: string;
  isoDate?: string;
  link?: string;
  guid?: string;
  thumbnail?: string;
}
const BlogCard: React.FC<Props> = ({
  title,
  isoDate,
  link,
  // guid,
  thumbnail,
}) => {
  return (
    <div className="cursor-pointer border-2 border-black dark:border-white items-center">
      <div className="flex flex-row p-4 items-center">
        {thumbnail && (
          <a href={link} className="w-16 h-16 lg:w-24 lg:h-24">
            <div className="sm:h-6 lg:h-0"></div>
            <img
              alt="blog post image"
              className="object-contain w-full"
              src={thumbnail}
            ></img>
          </a>
        )}
        <a href={link} className="flex-1 pl-4 no-underline">
          <div className="text-gray-500">
            {isValid(parseISO(isoDate))
              ? format(parseISO(isoDate), "PPP")
              : null}
          </div>
          <div className="font-bold text-xl lg:text-2xl no-underline hover:underline">
            {title}
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
