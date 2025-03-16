import { CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SectionCard = () => {
  return (
    <Card style={{ width: "18rem", height:"25rem" }}>
      <CardImg variant="top" src="/background.jpg" style={{height:"50%"}}/>
      <CardBody style={{height:"50%"}}>
        <CardTitle>Card Title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button variant="primary">Go somewhere</Button>
      </CardBody>
    </Card>
  );
};

export default SectionCard;
