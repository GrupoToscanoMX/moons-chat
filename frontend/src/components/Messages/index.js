import React from "react";

import "./messages.css";

function Messages({ messages, user }) {
  return (
    <div className="my-3 messages">
      <ul className="list-unstyled">
        {messages.map((message, i) => {
          const side = user === message.user ? "text-right" : "text-left";
          return (
            <li>
              <div className={`${side}`}>
                <h5 className="mt-0 mb-1">
                  <b>{message.user}</b>
                </h5>
                {message.text}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Messages;
