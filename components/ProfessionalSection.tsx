import React from "react";
import ExpandAccordionGrid from "./ExpandAccordionGrid";
import SectionTitle from "./SectionTitle";
import Container from "./Container";

// import { Container } from './styles';

const ProfessionalSection: React.FC = () => {
  return (
    <div className="bg-accent py-10 sm:py-20">
      <Container as="section">
        <SectionTitle title="Professional" subtitle="Projects"></SectionTitle>
        <div className="py-10">
          <ExpandAccordionGrid />
        </div>
      </Container>
    </div>
  );
};

export default ProfessionalSection;
