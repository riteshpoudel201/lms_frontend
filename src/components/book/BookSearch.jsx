import CustomPagination from "@components/common/CustomPagination";
import SectionCard, {
  SectionCardList,
} from "@components/pageSection/SectionCard";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ITEMS_PER_PAGE = 5;

const BookSearch = ({ books, searchQuery }) => {
  const navigate = useNavigate();
  const [isListView, setIsListView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState(null);
  const foundBooks = paginatedData?.filter((data) =>
    JSON.stringify(data).toLowerCase()?.includes(searchQuery.toLowerCase())
  );
  useEffect(()=>{
    if (foundBooks?.length === 0) {
        toast.error(`No books found with query: '${searchQuery}'.`);
        navigate("/book");
      }
  },[foundBooks,navigate])
  
  return (
    <>
      <Row className="mb-3">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div>
            {" "}
            {foundBooks?.length > 0 ? foundBooks.length : 0} Book(s) Found.
          </div>
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
          foundBooks.map((book) => {
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

export default BookSearch;
