import React, { useState, useRef } from "react";

import Image from "./Image";

interface Props {
  imagePath: string;
  title: string;
  description: string;
}
const ProjectCard: React.FC<Props> = ({
  title = "",
  description = "",
  imagePath,
}) => {
  return (
    <div className="cursor-pointer w-full">
      <Image path={imagePath} />

      <div className="pt-4">
        <p className="text-3xl font-bold hover:underline">{title}</p>
        <div>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
