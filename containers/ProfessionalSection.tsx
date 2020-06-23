import React from "react";
import ExpandAccordionGrid from "../components/ExpandAccordionGrid";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";

// import { Container } from './styles';

const ProfessionalSection: React.FC = () => {
  return (
    <div className="bg-accent py-10 sm:py-20">
      <Container as="section" id="professional-projects">
        <SectionTitle title="Professional" subtitle="Projects"></SectionTitle>
        <div className="py-10">
          <ExpandAccordionGrid />
        </div>
      </Container>
    </div>
  );
};

export default ProfessionalSection;
