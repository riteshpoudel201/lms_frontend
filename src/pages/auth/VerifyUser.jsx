import { useEffect, useRef, useState } from "react";
import SpinnerLoader from "../../components/common/Spinner";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import { activateNewUser } from "../../services/authService";

const VerifyUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState({});
  const nav = useNavigate();
  const [params] = useSearchParams();
  const sessionId = params.get("sessionId");
  const t = params.get("t");

  const shouldFetchRef = useRef(true);
  useEffect(() => {
    const activateUser = async () => {
      const result = await activateNewUser({ sessionId, t });
      setResponse(result.data);
      setIsLoading(false);
      if (result.status === "success") {
        nav("/signin");
      }
    };
    if (sessionId && t && shouldFetchRef.current) {
      activateUser();
    }
    shouldFetchRef.current = false;
  }, [sessionId, t, nav]);
  return (
    <>
      {isLoading && (
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "100vw", height: "100vh", margin: "auto" }}
        >
          <SpinnerLoader />
          <div>Please don&apos;t go back or refresh the page.</div>
        </div>
      )}
      {response.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message || "Some error occured."}
        </Alert>
      )}
      {response.message === "success" && (
        <Link to="/signin">
          <Button variant="success">Go to login</Button>
        </Link>
      )}
    </>
  );
};

export default VerifyUser;
