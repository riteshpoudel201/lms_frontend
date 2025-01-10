/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";
import { EyeIcon } from "lucide-react";
import React, { useState } from "react";
const CustomInput = ({ label, name, text, required, type, ...rest }, ref) => {
  const [toggle, setToggle] = useState(false);
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
          {...rest}
        />
        {type === "password" && (
          <EyeIcon
            onClick={()=> setToggle(prev => !prev)}
            style={{
              position: "absolute",
              zIndex: "10",
              right: "0.5rem",
              top: "20%",
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
