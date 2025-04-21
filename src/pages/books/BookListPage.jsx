import BookList from "@components/book/BookList";
import BookSearch from "@components/book/BookSearch";
import BreadcrumbComponent from "@components/common/Breadcrumb";

import { fetchAllBookAction } from "@features/books/bookAction";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
const BookListPage = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const dispatch = useDispatch();
  console.log(publicBooks ?? []);
  useEffect(() => {
    dispatch(fetchAllBookAction());
  }, [dispatch]);

  return (
    <Container className="mt-2">
      <Row>
        <BreadcrumbComponent query={query}/>
      </Row>
      
      {!query && <BookList books={publicBooks} />}
      {query && <BookSearch books={publicBooks} searchQuery={query} />}
    </Container>
  );
};

export default BookListPage;
