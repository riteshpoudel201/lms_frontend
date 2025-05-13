import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

import { BorrowTable } from "./BorrowTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBorrowedBookAction } from "@features/borrow/borrowAction";

const AllBorrowTable = () => {
  const { allBorrow:borrow, message } = useSelector((state) => state.borrowInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBorrowedBookAction());
  }, [dispatch]);
  console.log("Borrow List: ", borrow);
  return (
    <div className="mt-4">
      <div className="d-flex flex-row justify-content-between px-4">
        <span>{borrow?.length ?? 0} Borrow History(s) found</span>
        <div>
          <Form.Control
            placeholder="Search history by book..."
            // onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="mt-4">
        <BorrowTable data={borrow ?? []} message={message}/>
      </div>
    </div>
  );
};

export default AllBorrowTable;
