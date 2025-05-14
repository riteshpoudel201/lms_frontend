import AllBorrowTable from "@components/tables/AllBorrowTable";
import SelfBorrowTable from "@components/tables/SelfBorrowTable";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";

const BorrowPage = () => {
  const { user } = useSelector((state) => state.userInfo);
  const isAdmin = user.role === "admin";
  return (
    <Container>
      <Row>
        <div className="px-3 py-2">
          <h1> Borrow History</h1>
          <hr />
          <Tabs
            defaultActiveKey={isAdmin ? "all" : "self"}
            className="mb-3"
            aria-disabled
          >
            {isAdmin && (
              <Tab eventKey="all" title="All">
                <AllBorrowTable />
              </Tab>
            )}
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
