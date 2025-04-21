import { useRef } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const str = searchRef.current.value;
    navigate("book?search=" + str);
  };
  return (
    <div>
      <Form onSubmit={handleSearch}>
        <InputGroup className="">
          <Form.Control
            name="search"
            placeholder="Search book..."
            aria-label="Search book input"
            aria-describedby="Search book input field"
            ref={searchRef}
          />
          <InputGroup.Text id="basic-addon2" as="button">
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchBar;
