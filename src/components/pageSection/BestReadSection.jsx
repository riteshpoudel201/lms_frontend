import React from "react";
import SectionContent from "./SectionContent";
import SectionTitle from "./SectionTitle";
import SectionCard from "./SectionCard";
import SectionContainer from "./SectionContainer";

const BestReadSection = () => {
  return (
    <SectionContainer>
      <SectionTitle title="Best Read" />
      <SectionContent>
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </SectionContent>
    </SectionContainer>
  );
};

export default BestReadSection;
