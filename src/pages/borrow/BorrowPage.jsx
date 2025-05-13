import AllBorrowTable from "@components/tables/AllBorrowTable";
import SelfBorrowTable from "@components/tables/SelfBorrowTable";
import { Container, Row, Tab, Tabs } from "react-bootstrap";

const BorrowPage = () => {
  return (
    <Container>
      <Row>
        <div className="px-3 py-2">
          <h1> Borrow History</h1>
          <hr />
          <Tabs defaultActiveKey="all" className="mb-3" aria-disabled>
            <Tab eventKey="all" title="All">
              <AllBorrowTable />
            </Tab>
            <Tab eventKey="self" title="Self">
              <SelfBorrowTable />
            </Tab>
          </Tabs>
        </div>
      </Row>
    </Container>
  );
};

export default BorrowPage;
