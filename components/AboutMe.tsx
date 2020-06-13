import React, { ReactElement, ReactType } from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaGooglePlus,
  FaGitlab,
  FaFacebook,
  FaLocationArrow,
  FaBook,
} from "react-icons/fa";
import { IconBaseProps } from "react-icons";
// import { Container } from './styles';
import classNames from "classnames";

const AboutMe: React.FC = () => {
  return (
    <div className="bg-accent py-10 sm:py-20 px-10">
      <div className="social-card bg-white shadow-lg w-full p-10 mx-auto grid grid-cols-12 grid-flow-row">
        <div className="col-span-12 sm:col-span-4 lg:col-span-3 w-full">
          <div className="flex justify-center mb-6 w-full">
            <img
              className="object-contain border-4 border-darkgray"
              src={require("../assets/profile.jpg?resize&size=300")}
            />
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl leading-tight">
            Matheus Vicente
          </h2>
          <p className="py-2">Comp. Eng. Student at UFES</p>
          <p>Fullstack Developer</p>
          <div className=" flex items-center justify-between flex-wrap">
            <div className="text-md text-gray-700 flex items-center py-2 ">
              <span className="mr-2">
                <FaLocationArrow />
              </span>
              <span>Vitória - Brazil</span>
            </div>
            <div className="flex items-center py-2">
              {SocialIcons.map(({ icon, color }, index) => (
                <div
                  className={classNames({
                    "mx-1": index > 0,
                    "mr-1": index === 0,
                  })}
                >
                  <SocialButton color={color} icon={icon} size={32} />
                </div>
              ))}
            </div>
          </div>
          <a
            className="cursor-pointer hover:text-indigo-500 flex items-center py-4"
            href="/pdf/resume.pdf"
          >
            <FaBook />
            <span className="pl-2 text-sm ">Resumé</span>
          </a>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-3 w-full"></div>
      </div>
      <style jsx>
        {`
          .social-card {
            max-width: 1200px;
          }
        `}
      </style>
    </div>
  );
};

const SocialIcons = [
  { icon: FaGithub, color: "#333" },
  { icon: FaLinkedinIn, color: "#0e76a8" },
  { icon: FaGooglePlus, color: "#ea4335" },
  { icon: FaGitlab, color: "#ea4335" },
  { icon: FaFacebook, color: "#3b5998" },
];

interface SocialButtonProps {
  size: number;
  icon: React.ReactType;
}

const SocialButton: React.FC<IconBaseProps & SocialButtonProps> = ({
  size = 16,
  icon,
  color,
  ...iconProps
}) => {
  const Component: React.ReactType = icon;
  return (
    <div
      className="rounded-full text-white flex items-center justify-center p-1"
      style={{ backgroundColor: color, width: size, height: size }}
    >
      <Component size={Math.ceil(size * (7 / 12))} {...iconProps} />
    </div>
  );
};
export default AboutMe;
