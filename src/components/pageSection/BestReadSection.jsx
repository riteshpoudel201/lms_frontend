import React from "react";
import SectionContent from "./SectionContent";
import SectionTitle from "./SectionTitle";
import SectionCard from "./SectionCard";
import SectionContainer from "./SectionContainer";
import { useSelector } from "react-redux";

const BestReadSection = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);
  let books = [];
  if (publicBooks.length) {
    const sorted = [...publicBooks].sort(
      (a, b) => b.averageRating - a.averageRating
    );
    books = sorted.slice(0, 4);
  }
  return (
    <SectionContainer>
      <SectionTitle title="Best Read" />
      <SectionContent>
        {books.map((book) => (
          <SectionCard key={book._id} {...book} />
        ))}
      </SectionContent>
    </SectionContainer>
  );
};

export default BestReadSection;
