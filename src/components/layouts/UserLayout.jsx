import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../common/Sidebar";
import AuthLayout from "./AuthLayout";

const UserLayout = () => {
  return (
    <AuthLayout>
      <Header />
      <Container fluid>
        <Row>
          <Col md={3} xl={2} className="bg-dark text-white">
            <div className="p-3">
              <div>Welcome Back</div>
              <h4>Ritesh Poudel</h4>
              <hr />
              <Sidebar />
            </div>
          </Col>
          <Col md={9} xl={10}>
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      <Footer />
    </AuthLayout>
  );
};

export default UserLayout;
