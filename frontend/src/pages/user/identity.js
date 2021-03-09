import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

function IdentityPage() {
  const [username, setUsername] = useState("");

  return (
    <div className="identity-page">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h4 className="text-center">Ingresa tu nombre:</h4>
          <input
            className="form-control"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Link
            className="btn btn-primary btn-block my-3"
            onClick={(e) => (!username ? e.preventDefault() : null)}
            to={`/chat?username=${username}`}
          >
            Ingresar al Chat
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default IdentityPage;
