/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";
const CustomInput = ({ label, name, text, required, ...rest }) => {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label className="fs-6">
        {label}
        {required && <span>*</span>}
      </Form.Label>
      <Form.Control name={name} required={required} {...rest} />
      {text && <Form.Text className="text-muted">{text}</Form.Text>}
    </Form.Group>
  );
};

export default CustomInput;
