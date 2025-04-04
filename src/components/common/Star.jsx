import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Star = ({ rating, total=5 }) => {
  const normalizedRating = (rating / total) * 5;
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar =
    normalizedRating % 1 >= 0.25 && normalizedRating % 1 <= 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center text-yellow-500">
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`full-${index}`} />
      ))}

      {hasHalfStar && <FaStarHalfAlt key="half" />}

      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar key={`empty-${index}`} />
      ))}
    </div>
  );
};

export default Star;
