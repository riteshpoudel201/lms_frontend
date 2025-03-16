import CustomCarousel from "@components/customCarousel/CustomCarousel";
import BestReadSection from "@components/pageSection/BestReadSection";
import JustInSection from "@components/pageSection/JustInSection";
import RecommendationSection from "@components/pageSection/RecommendationSection";
import Section from "@components/pageSection/SectionContent";
import { Row, Col, Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CustomCarousel />
          <JustInSection />
          <BestReadSection />
          <RecommendationSection />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
