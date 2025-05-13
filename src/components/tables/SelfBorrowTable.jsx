import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { BorrowTable } from "./BorrowTable";
import { fetchUserBorrowedBookAction } from "@features/borrow/borrowAction";
import { useDispatch, useSelector } from "react-redux";

const SelfBorrowTable = () => {
  const { borrow } = useSelector((state) => state.borrowInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserBorrowedBookAction());
  }, [dispatch]);
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
        <BorrowTable
          data={borrow}
          message={borrow.length === 0 && "You haven't borrowed any book."}
        />
      </div>
    </div>
  );
};

export default SelfBorrowTable;
