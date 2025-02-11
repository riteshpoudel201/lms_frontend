import BooksTable from "@components/tables/BookTable";
import { fetchAllBookAction } from "@features/books/bookAction";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Books = () => {
  const { book } = useSelector((state) => state.bookInfo);
  const [filterBook, setFilterBook] = useState(book ?? []);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredBook = book.filter((data) =>
      data.title.toLowerCase().includes(searchValue)
    );
    setFilterBook(filteredBook);
  };

  useEffect(() => {
    setFilterBook(book);
  }, [book]);

  useEffect(() => {
    dispatch(fetchAllBookAction());
  }, [dispatch]);
  return (
    <div className="px-3 py-2">
      <h1>Books</h1>
      <hr />
      <div className="d-flex flex-row justify-content-end">
        <Link to="/user/new-book">
          <Button className="d-flex flex-row gap-2">
            <Plus />
            Add New Book
          </Button>
        </Link>
      </div>
      <div className="mt-4">
        <div className="d-flex flex-row justify-content-between px-4">
          <span>{filterBook?.length ?? 0} Book(s) found</span>
          <div>
            <Form.Control
              placeholder="Search book by name..."
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="mt-4">
          <BooksTable data={filterBook} />
        </div>
      </div>
    </div>
  );
};

export default Books;
