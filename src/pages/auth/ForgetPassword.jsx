import { Card } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const ForgetPassword = () => {
  

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center my-4">
    <Card style={{ width: "20rem", borderRadius: "10px" }}>
        <Card.Title style={{ textAlign: "center", marginTop: "0.9rem" }}>
          Forget Password?
        </Card.Title>
        <Card.Body>
          <Outlet />
        </Card.Body>
      </Card>
      </div>
  )
}

export default ForgetPassword