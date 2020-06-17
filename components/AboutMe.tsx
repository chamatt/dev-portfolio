import React, { ReactElement, ReactType } from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaLocationArrow,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";
import {
  DiHaskell,
  DiPython,
  DiReact,
  DiSass,
  DiCss3,
  DiHtml5,
  DiNodejsSmall,
  DiMongodb,
  DiPostgresql,
  DiMysql,
  DiAndroid,
  DiApple,
} from "react-icons/di";
import { GrGraphQl, GrGatsbyjs } from "react-icons/gr";
import { IconBaseProps } from "react-icons";
// import { Container } from './styles';
import classNames from "classnames";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import { Button } from "./Button";
import attributes from "../content/landing/profile.yml";

function nextjsIcon(props) {
  return (
    <svg
      aria-hidden="true"
      width="1.66em"
      height="1em"
      style={{
        verticalAlign: "-.125em",
        msTransform: "rotate(360deg)",
        WebkitTransform: "rotate(360deg)",
      }}
      viewBox="0 0 512 309"
      transform="rotate(360)"
      {...props}
    >
      <path d="M120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675H120.81V80.561zm105.22 0h10.26l45.467 63.423L328.23 80.56 391.441 0l-103.85 150.65 53.515 74.127h-10.663l-48.686-67.462-48.888 67.462h-10.461l53.917-74.128-50.296-70.088zm118.898 7.676V80.56h110.048v7.676h-50.699v136.54h-8.852V88.237h-50.497zM0 80.56h11.065l152.58 228.323-63.053-84.107L9.254 91.468l-.402 133.31H0V80.56zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212 0-1.81 1.356-3.212 3.165-3.212 1.83 0 3.165 1.401 3.165 3.212 0 1.811-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29 3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828 3.875 0 6.717-2.005 6.717-4.764 0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602 0-5.54 4.521-9.227 11.303-9.227 6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657-3.81 0-6.35 1.833-6.35 4.635 0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753 0 5.95-4.607 9.68-11.97 9.68-6.89 0-11.52-3.558-11.864-9.12z" />
    </svg>
  );
}

const LanguageStack = [
  { icon: "typescript-plain", name: "Typescript" },
  { icon: "javascript-plain", name: "Javascript" },
  { name: "Python", custom: DiPython },
  { icon: "cplusplus-plain", name: "C++" },
  { name: "Haskell", custom: DiHaskell },
];

const FrontEndStack = [
  { name: "React.js", custom: DiReact },
  {
    name: "Next.js",
    custom: nextjsIcon,
  },
  {
    name: "Gatsby",
    custom: GrGatsbyjs,
  },
  { name: "React Native", custom: DiAndroid },
  { name: "ReactNative", custom: DiApple },
  { name: "Redux", custom: DiReact },
  { name: "Apollo", custom: GrGraphQl },
  { name: "SaSS", custom: DiSass },
  { name: "HTML", custom: DiHtml5 },
  { name: "CSS", custom: DiCss3 },
];
const BackEndStack = [
  { name: "Node.js", custom: DiNodejsSmall },
  { name: "MongoDB", custom: DiMongodb },
  { icon: "postgresql-plain", name: "Postgres" },
  { name: "MySQL", custom: DiMysql },
  { icon: "redis-plain", name: "Redis" },
  { name: "ApolloServer", custom: GrGraphQl },
  { icon: "sequelize-plain", name: "Sequelize" },
];

interface TechStackProps {
  title: string;
  stack: Array<{ icon?: string; name: string; custom?: React.ReactType }>;
}

const TechStack: React.FC<TechStackProps> = ({ title, stack }) => {
  return (
    <div className="py-2 w-full">
      <h3 className="text-md text-darkgray dark:text-white pb-4 uppercase font-bold">
        {title}
      </h3>
      <div className="flex flex-row flex-wrap justify-start">
        {stack.map(({ icon, name, custom }) => {
          const Custom = custom ?? null;
          const Icon = icon
            ? () => <i className={`devicon-${icon} text-5xl`}></i>
            : () => <Custom className="text-5xl fill-current" />;
          return (
            <div
              key={name}
              className="flex flex-col items-center w-20 hover:text-indigo-500 text-gray-600 dark:text-gray-400 py-2"
            >
              <Icon />
              <p className="text-xs pt-2">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AboutMe: React.FC = () => {
  console.log(attributes);
  return (
    <div className="bg-accent py-10 sm:py-20">
      <Container as="section">
        <div className="grid grid-cols-12 grid-flow-row">
          <div className="col-span-12 sm:col-span-4 lg:col-span-3 w-full">
            <div className="w-full bg-default shadow-lg p-10 sm:p-4 lg:p-10">
              <div className="flex justify-center mb-6 w-full">
                <img
                  alt="profile picture"
                  className="object-contain w-full"
                  src={attributes.profile_picture}
                />
              </div>
              <h2 className="font-bold text-2xl sm:text-3xl leading-tight">
                {attributes.name}
              </h2>
              <p className="py-2">{attributes.description}</p>
              <div className=" flex items-center justify-between flex-wrap">
                <div className="text-md text-gray-700 dark:text-gray-400 flex items-center py-2 ">
                  <span className="mr-2">
                    <FaLocationArrow />
                  </span>
                  <span>{attributes.location}</span>
                </div>
                <div className="flex items-center py-2">
                  {SocialIcons.map(({ icon, color, link, name }, index) => (
                    <div
                      className={classNames({
                        "mx-1": index > 0,
                        "mr-1": index === 0,
                      })}
                    >
                      <SocialButton
                        color={color}
                        icon={icon}
                        link={link}
                        name={name}
                        size={32}
                      />
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
              <Button variant="primary" className="w-full mt-1" size="small">
                Contact me
              </Button>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-8 lg:col-span-9 w-full pl-0 sm:pl-20 pt-10 sm:pt-0">
            <SectionTitle
              title="tech"
              subtitle="skills"
              className="pb-5"
            ></SectionTitle>
            <TechStack title="languages" stack={LanguageStack} />
            <TechStack title="Front-End" stack={FrontEndStack} />
            <TechStack title="Back-End" stack={BackEndStack} />
            <h6></h6>
          </div>
        </div>
        <style jsx>
          {`
            .social-card {
              max-width: 1200px;
            }
          `}
        </style>
      </Container>
    </div>
  );
};

const SocialIcons = [
  {
    icon: FaGithub,
    color: "#333",
    link: attributes.github,
    name: "github profile",
  },
  {
    icon: FaLinkedinIn,
    color: "#0e76a8",
    link: "https://www.linkedin.com/in/matheus-vicente-d-190001b2/",
    name: "linkedin profile",
  },
  {
    icon: FaEnvelope,
    color: "#ea4335",
    link: `mailto:${attributes.email}`,
    name: "email address",
  },
];

interface SocialButtonProps {
  size: number;
  icon: React.ReactType;
  link: string;
  name: string;
}

const SocialButton: React.FC<IconBaseProps & SocialButtonProps> = ({
  size = 16,
  icon,
  color,
  link,
  name,
  ...iconProps
}) => {
  const Component: React.ReactType = icon;
  return (
    <a
      aria-label={name || "profile"}
      href={link}
      className="rounded-full text-white flex items-center justify-center p-1"
      style={{ backgroundColor: color, width: size, height: size }}
    >
      <Component size={Math.ceil(size * (7 / 12))} {...iconProps} />
    </a>
  );
};
export default AboutMe;
