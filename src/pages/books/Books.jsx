import BooksTable from "@components/tables/BookTable";
import { fetchAllBookAction } from "@features/books/bookAction";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Books = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllBookAction());
  },[dispatch])
  return (
    <div className="px-3 py-2">
      <h1>Books</h1>
      <hr />
      <div className="text-end">
        <Button>Add New Book</Button>
      </div>
      <div className="mt-4">
        <div className="d-flex flex-row justify-content-between px-4">
          <span>10 Book(s) found</span>
          <div>
            <Form.Control placeholder="Search book by name..." />
          </div>
        </div>
        <div>
          <BooksTable />
        </div>
      </div>
    </div>
  );
};

export default Books;
