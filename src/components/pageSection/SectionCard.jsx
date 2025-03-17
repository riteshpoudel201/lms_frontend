import { CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SectionCard = ({imageURL, title, author, year, slug}) => {
  return (
    <Card className="mx-auto shadow-lg" style={{ maxWidth: "100%", minWidth: "250px" }}>
      <CardImg
        variant="top"
        src={imageURL ?? "/background.jpg"}
        className="img-fluid"
        style={{ height: "180px", objectFit: "cover" }} // Ensures image isn't too long
      />
      <CardBody className="d-flex flex-column justify-content-between">
        <div>
          <CardTitle className="fs-5">{title || "Card Title"}</CardTitle>
          <CardText className="text-muted">
            {author || "No Author"}-{year || "N/A"}
          </CardText>
        </div>
        <Link to={slug}>
        <Button variant="dark" className="w-100">View Details</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default SectionCard;
