import React, { useState } from "react";
import CustomPagination from "@components/common/CustomPagination";
import SectionCard, {
  SectionCardList,
} from "@components/pageSection/SectionCard";

import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Pagination,
  Row,
} from "react-bootstrap";

const ITEMS_PER_PAGE = 5;

const BookList = ({ books }) => {
  const [isListView, setIsListView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState(null);
  return (
    <>
      <Row className="mb-3">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div> 100 Books Found.</div>
          <div>
            <ButtonGroup aria-label="Basic example">
              <Button
                variant="secondary"
                onClick={() => setIsListView(false)}
                active={!isListView}
              >
                Card
              </Button>
              <Button
                variant="secondary"
                onClick={() => setIsListView(true)}
                active={isListView}
              >
                List
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Row>
      <Row
        className="g-3 p-4"
        style={{
          minWidth: isListView && "485px",
          overflowX: isListView && "auto",
        }}
      >
        {paginatedData &&
          paginatedData.map((book) => {
            return (
              <Col xs={12} sm={!isListView && 6} md={!isListView && 3}>
                {isListView ? (
                  <SectionCardList {...book} />
                ) : (
                  <SectionCard {...book} />
                )}
              </Col>
            );
          })}
      </Row>
      <Row>
        <CustomPagination
          currentPage={currentPage}
          data={books}
          itemsPerPage={ITEMS_PER_PAGE}
          setCurrentPage={setCurrentPage}
          onPageChange={(start, end) => {
            const filteredData = books.slice(start, end);
            setPaginatedData(filteredData);
          }}
        />
      </Row>
    </>
  );
};

export default BookList;
