import { Button, Card, Form } from "react-bootstrap";
import CustomInput from "@components/common/CustomInput";
import useForm from "@hooks/useForm";

const SignInPage = () => {
  const { data, handleChange, isLoading, setIsLoading} = useForm({});

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsLoading(true);
    console.log(data);
    
    setIsLoading(false);
  }
  return (
    <div className="bg-primary d-flex justify-content-center align-items-center" style={{ height: "80vh", backgroundImage:"url('./src/assets/background.jpg')", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
      <Card style={{ width: "18rem", borderRadius:"10px" }}>
        <Card.Title style={{ textAlign: "center", marginTop:"0.9rem" }}>Welcome to LMS</Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <CustomInput  name="email" label="Email" placeholder="email@email.com" type="email" onChange={handleChange} required/>
            <CustomInput  name="password" label="Password" placeholder="********" type="password" onChange={handleChange} required/>
            <Button variant="dark" className="w-100" type="submit" disabled={isLoading}>Login</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInPage;
