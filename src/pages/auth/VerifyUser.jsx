import { useEffect, useState } from "react";
import SpinnerLoader from "../../components/common/Spinner";
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { activateNewUser } from "../../services/authService";

const VerifyUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState({});
  const [params] = useSearchParams();
  const sessionId = params.get("sessionId");
  const t = params.get("t");

  useEffect(() => {
    const activate = activateNewUser({ sessionId, t});
  }, [sessionId, t]);
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
      {!isLoading && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message || "Some error occured."}
        </Alert>
      )}
    </>
  );
};

export default VerifyUser;
