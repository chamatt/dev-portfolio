import React from "react";
import { Button } from "./Button";
import Navbar from "./Navbar";
import Container from "./Container";

// import { Container } from './styles';

const HeroSection: React.FC = () => {
  return (
    <Container as="section" className="min-h-screen sm:min-h-0">
      <Navbar />
      <div className="flex flex-col sm:flex-row">
        <div className="sm:hidden h-64 mx-auto mt-8">
          <img
            className="object-fit h-full"
            src={require("../assets/peep-standing-half.png")}
          ></img>
        </div>
        {/* Top Menu */}

        <div className="w-full sm:w-1/2">
          <div className="flex flex-col-reverse sm:flex-col mt-8">
            <p className="text-gray-700 text-2xl sm:text-3xl uppercase tracking-wider mb-4">
              Matheus Vicente
            </p>
            <h2 className="font-bold text-5xl sm:text-6xl mb-4 leading-none">
              Fullstack Developer
            </h2>
          </div>
          <p className="pr-4 text-lg w-10/12">
            Over the past two years, I’ve been working with clients from all
            over the world to bring their ideas into reality. Will yours be
            next?
          </p>
          <div className="flex flex-wrap mt-8 items-center sm:items-start sm:flex-col lg:flex-row">
            <div className="w-1/2 pr-1 sm:mb-4 sm:w-64 lg:mr-2">
              <Button size="big" className="w-full" variant="primary">
                <span className="hidden sm:block">MY PROJECTS</span>
                <span className="sm:hidden">PROJECTS</span>
              </Button>
            </div>
            <div className="w-1/2 pl-1 sm:mb-4 sm:w-64 lg:mr-2">
              <Button size="big" className="w-full" variant="secondary">
                <span className="hidden sm:flex justify-end">HIRE ME</span>
                <span className="sm:hidden">HIRE</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="hidden sm:flex lg:hidden justify-end lg:max-h-600">
            <img src={require("../assets/peep-standing-full.png")}></img>
          </div>
          <div className="hidden lg:flex justify-end lg:max-h-70-screen">
            <img
              className="object-contain"
              src={require("../assets/peep-standing-half.png")}
            ></img>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 mb-4">
        <img
          className="mx-auto dark:filter-invert"
          src={require("../assets/mouse-scrolling.png?resize&size=40").src}
        ></img>
      </div>
    </Container>
  );
};

export default HeroSection;