import React from "react";
import SectionContent from "./SectionContent";
import SectionTitle from "./SectionTitle";
import SectionCard from "./SectionCard";
import SectionContainer from "./SectionContainer";

const RecommendationSection = () => {
  return (
    <SectionContainer>
      <SectionTitle title="Recommendation for you" />
      <SectionContent>
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </SectionContent>
    </SectionContainer>
  );
};

export default RecommendationSection;
