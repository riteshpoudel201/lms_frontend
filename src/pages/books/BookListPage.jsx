import BreadcrumbComponent from "@components/common/Breadcrumb";
import SectionCard, {
  SectionCardList,
} from "@components/pageSection/SectionCard";
import { fetchAllBookAction } from "@features/books/bookAction";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const BookListPage = () => {
  const [isListView, setIsListView] = useState(false);
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const dispatch = useDispatch();
  console.log(publicBooks ?? []);
  useEffect(() => {
    dispatch(fetchAllBookAction());
  }, [dispatch]);
  return (
    <Container className="mt-2">
      <Row>
        <BreadcrumbComponent />
      </Row>
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
      <Row className="g-3 p-4" style={{minWidth: isListView && "485px", overflowX:isListView && "auto"}}>
        {publicBooks.map((book) => {
          return (
            <Col xs={12} sm={!isListView && 6} md={!isListView && 3} >
              {isListView ? (
                <SectionCardList {...book} />
              ) : (
                <SectionCard {...book} />
              )}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookListPage;
