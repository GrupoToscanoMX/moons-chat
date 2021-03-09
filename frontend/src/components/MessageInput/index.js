import React from "react";
import { Row, Col } from "reactstrap";

function MessageInput({ message, setMessage, sendMessage }) {
  return (
    <div>
      <form>
        <Row>
          <Col md={12}>
            <div class="input-group mb-3">
              <input
                className="form-control"
                name="message"
                type="text"
                placeholder="Escribe un mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div class="input-group-append">
                <button
                  className="btn btn-primary btn-block"
                  onClick={(e) => sendMessage(e)}
                >
                  Enviar
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default MessageInput;
