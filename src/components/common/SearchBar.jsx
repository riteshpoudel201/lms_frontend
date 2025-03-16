import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div>
      <InputGroup className="">
        <Form.Control
          placeholder="Search book..."
          aria-label="Search book input"
          aria-describedby="Search book input field"
        />
        <InputGroup.Text id="basic-addon2"><FaSearch /></InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
