import React from "react";
import attributes from "../content/landing/profile.yml";
import { FaLocationArrow, FaBook } from "react-icons/fa";
import { SocialIcons, SocialButton } from "./SocialIcons";
import classNames from "classnames";
import { Button } from "./Button";

interface PersonalCardProps {
  showButton?: boolean;
}

const PersonalCard: React.FC<PersonalCardProps> = ({ showButton = true }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay={150}
      data-aos-offset={50}
      data-aos-easing="ease-out"
    >
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
                key={name}
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
        {showButton && (
          <Button variant="primary" className="w-full mt-1" size="small">
            Contact me
          </Button>
        )}
      </div>
    </div>
  );
};

export default PersonalCard;
