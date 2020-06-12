import React from "react";

interface Props {
  image: string;
  title: string;
  description: string;
}
const ProjectCard: React.FC<Props> = ({
  title = "",
  description = "",
  image,
}) => {
  return (
    <div className="cursor-pointer">
      <div className="w-full hover:shadow-lg">
        <img
          src={image}
          className="object-cover w-full h-full position-center"
        ></img>
      </div>
      <div className="pt-4">
        <p className="text-3xl font-bold">{title}</p>
        <div>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
