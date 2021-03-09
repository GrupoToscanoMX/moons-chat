import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";

import "./room.css";

// Components
import MessageInput from "../../components/MessageInput";
import Messages from "../../components/Messages";

function ChatRoomPage({ location }) {
  const socket = io("http://localhost:5000");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { username } = queryString.parse(location.search);
    setUsername(username);
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((msg) => [...msg, message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", { username, message }, () => setMessage(""));
    }
  };

  return (
    <div>
      <div className="messages-container">
        <Messages messages={messages} user={username} />
      </div>
      <MessageInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default ChatRoomPage;
