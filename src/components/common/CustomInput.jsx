/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";
import { EyeIcon } from "lucide-react";
import React, { useState } from "react";

const CustomInput = ({ label, name, text, required, type, value, ...rest }, ref) => {
  const [toggle, setToggle] = useState(false);
  let valueDate = value;

  if (type === "date") {
    // Check if the value is a valid date or a string in a different format (e.g., ISO string)
    const formattedDate =
      value && !isNaN(new Date(value)) ? new Date(value).toISOString().split("T")[0] : '';
    valueDate = formattedDate || ''; // default to empty string if invalid or no value
  }

  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label className="fs-6">
        {label}
        {required && <span>*</span>}
      </Form.Label>
      <div style={{ position: "relative" }}>
        <Form.Control
          type={toggle ? "text" : type}
          name={name}
          ref={ref}
          required={required}
          value={valueDate}
          {...rest}
        />
        {type === "password" && (
          <EyeIcon
            onClick={() => setToggle((prev) => !prev)}
            style={{
              position: "absolute",
              zIndex: "10",
              right: "0.5rem",
              top: "20%",  // You may want to adjust this value
              color: "gray",
            }}
          />
        )}
      </div>
      {text && <Form.Text className="text-muted">{text}</Form.Text>}
    </Form.Group>
  );
};

export default React.forwardRef(CustomInput);
