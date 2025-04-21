import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";

const CustomPagination = ({
  data,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  onPageChange, // (startIndex, endIndex) => void
}) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const items = [];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  // Notify parent about the current page range
  useEffect(() => {
    if (typeof onPageChange === "function") {
      onPageChange(startIndex, endIndex);
    }
  }, [currentPage, data.length, itemsPerPage]);

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
};

export default CustomPagination;
