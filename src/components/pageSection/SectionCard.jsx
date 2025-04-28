import { CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SectionCard = ({ imageURL, title, author, year, slug }) => {
  return (
    <Card
      className="mx-auto shadow-lg"
      style={{ maxWidth: "100%", minWidth: "250px" }}
    >
      <CardImg
        variant="top"
        src={imageURL ?? "/background.jpg"}
        className="img-fluid"
        style={{ height: "250px", objectFit: "cover" }} // Ensures image isn't too long
      />
      <CardBody className="d-flex flex-column justify-content-between">
        <div>
          <CardTitle className="fs-5" title={title}>
            {title?.slice(0, 20) + "..." || "Card Title"}
          </CardTitle>
          <CardText className="text-muted" title={author}>
            {author?.slice(0, 20) + "..." || "No Author"}-{year || "N/A"}
          </CardText>
        </div>
        <Link to={ slug}>
          <Button variant="dark" className="w-100">
            View Details
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export const SectionCardList = ({ imageURL, title, author, year, slug, description }) => {
  return (
    <Card className="mx-auto border-0" style={{minWidth:"485px"}}>
      <div className="d-flex flex-row">
        <CardImg
          src={imageURL ?? "/background.jpg"}
          className="img-fluid"
          style={{
            width: "100%",
            maxWidth: "250px",
            height: "100%",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <CardBody className="d-flex flex-column justify-content-between flex-grow-1 p-3">
          <div className="mb-2">
            <CardTitle className="fs-5" title={title}>
              {title?.slice(0, 40) || "Card Title"}
            </CardTitle>
            
            <Card.Text>{ description.length > 200 ? description.slice(0,200) + "..." : description || ""}</Card.Text>
            <CardText className="text-muted" title={author}>
              {author?.slice(0, 40) || "No Author"} - {year || "N/A"}
            </CardText>
          </div>
          <Link to={slug}>
            <Button variant="dark" className="w-100">
              View Details
            </Button>
          </Link>
        </CardBody>
      </div>
    </Card>
  );
};

export default SectionCard;
