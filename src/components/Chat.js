import { Card, CardActions, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./chat.css";
import bg from "../images/chat-pattern.png";

const Chat = () => {
  const url = "http://localhost:5000";

  // initializing socket
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));
  const [text, setText] = useState("");

  const [messageArray, setMessageArray] = useState([
    // { text: "Aaj kon sa exam hai??", sent: false },
    // { text: "rehno do , kya karoge padh ke!!", sent: true },
    // { text: "okk", sent: false },
    // {
    //   text: "qui et et illo enim repellat maxime nisi voluptatem provident sequi facere reprehenderit excepturi aut ratione ducimus repellendus et ducimus nisi voluptas unde architecto recusandae reiciendis sunt aliquid delectus dolorum repellendus ipsum est optio itaque expedita dolor sapiente et qui ullam modi vero hic laboriosam et doloremque ut ut eius blanditiis illum expedita accusantium culpa illo asperiores placeat ea harum quidem voluptatem eum dolorem illo at molestiae quo ad non repudiandae porro rerum totam rerum ea soluta illo officiis non quia deserunt dolores ut eius ipsa vel distinctio accusantium debitis quo dolor et dolore quidem qui velit aut in corporis",
    //   sent: false,
    // },
  ]);

  useEffect(() => {
    socket.connect();
  }, []);

  const displayMessage = () => {
    return messageArray.map((message) => (
      <div className={message.sent ? "msg-sent message" : "msg-rec message"}>
        <p className="msg-text">{message.text}</p>
      </div>
    ));
  };

  const sendMessage = () => {
    console.log("mesg sent");
    const obj = { text: text, sent: true };

    setMessageArray([...messageArray, obj]);

    socket.emit("sendmsg", obj);
  };

  // for recieving message from server
  socket.on("recmsg", (data) => {
    console.log(data);
    setMessageArray([...messageArray, data]);
  });

  return (
    <div className="container">
      <Card>
        <CardContent
          sx={{
            background: "url(" + bg + ")",
          }}
          className="chat-area"
        >
          {displayMessage()}
        </CardContent>
        <CardActions>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button className="btn btn-success" onClick={sendMessage}>
              Send Message
            </button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default Chat;
