import React, { useState, useRef } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
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
    <div className="cursor-pointer">
      <Image path={imagePath} />

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
