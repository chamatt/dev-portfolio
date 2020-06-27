import React from "react";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { BsMoon, BsSun } from "react-icons/bs";
import { useDarkMode } from "../hooks/useDarkMode";
import MovingBall from "../components/MovingBall";
import scrollblack from "../assets/scroll-black.json";
import scrollwhite from "../assets/scroll-white.json";
import Lottie from "react-lottie";
import { Link } from "react-scroll";
// import { Container } from './styles';

import attributes from "../content/landing/hero.yml";

const HeroSection: React.FC = () => {
  const getJobTitleStyled = (title) => {
    const splitted = title.split(" ");
    const splitIndex = Math.floor(splitted.length / 2);
    return (
      <>
        <span
          className="dark:text-black"
          style={{ backgroundColor: "#0af5f4" }}
        >
          {splitted.slice(0, splitIndex).join(" ")}
        </span>{" "}
        {splitted.slice(splitIndex).join(" ")}
      </>
    );
  };
  return (
    <Container as="section" className="min-h-screen sm:min-h-0">
      <Navbar />
      <canvas
        className="absolute left-0 top-0"
        style={{ zIndex: -1, opacity: 0.8 }}
        color-swarm="true"
      ></canvas>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:hidden h-64 mx-auto mt-8 relative">
          <img
            alt="drawing of a guy with a huge hair"
            className="object-fit h-full"
            src={"/img/programmer.svg"}
          ></img>
        </div>
        {/* Top Menu */}

        <div className="w-full sm:w-1/2">
          <div className="flex flex-col-reverse sm:flex-col mt-8">
            <p className="text-gray-700 dark:text-gray-500 text-2xl sm:text-3xl uppercase tracking-wider mb-4">
              {attributes.name}
            </p>
            <h2 className="font-bold text-5xl sm:text-6xl mb-4 leading-none">
              {getJobTitleStyled(attributes.job_title)}
            </h2>
          </div>
          <p className="pr-4 text-lg w-10/12">{attributes.intro}</p>
          <div className="flex flex-wrap mt-8 items-center sm:items-start sm:flex-col lg:flex-row">
            <div className="w-1/2 pr-1 sm:pr-0 xl:pr-1  sm:mb-4 sm:w-64 lg:mr-2">
              <Link
                to="personal-projects"
                smooth={true}
                offset={-50}
                duration={500}
              >
                <Button size="big" className="w-full" variant="primary">
                  <span className="hidden sm:block">
                    {attributes.primary_button}
                  </span>
                  <span className="sm:hidden">{attributes.primary_button}</span>
                </Button>
              </Link>
            </div>
            <div className="w-1/2 pl-1 sm:pl-0 xl:pl-1 sm:mb-4 sm:w-64 lg:mr-2">
              <Link to="contact" smooth={true} offset={-50} duration={800}>
                <Button size="big" className="w-full" variant="secondary">
                  <span className="hidden sm:flex justify-end">
                    {attributes.secondary_button}
                  </span>
                  <span className="sm:hidden">
                    {attributes.secondary_button}
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="hidden sm:flex lg:hidden justify-end lg:max-h-600 h-full">
            <img
              alt="drawing of a guy with a huge hair standing"
              src={"/img/programmer.svg"}
            ></img>
          </div>
          <div className="hidden lg:flex justify-end lg:max-h-70-screen relative h-full">
            <img
              alt="drawing of a guy with a huge hair"
              className="object-contain"
              src={"/img/programmer.svg"}
            ></img>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 pb-4">
        <div className="dark:hidden">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: scrollblack,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid meet",
              },
            }}
            height={30}
            width={30}
          />
        </div>
        <div className="hidden dark:block">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: scrollwhite,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid meet",
              },
            }}
            height={30}
            width={30}
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
