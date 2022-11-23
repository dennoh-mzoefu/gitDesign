import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
// import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  // const {chats} = useSelector((state) => chatreducer)
  const [currentMessage, setCurrentMessage] = useState("");
  // const [messageList, setMessageList] = useState(chats);
  const [messageList, setMessageList] = useState([
    { author: "you", message: "hello", time: "17:56" },
    { author: "other", message: "hello", time: "17:56" },
    { author: "you", message: "hello", time: "17:56" },
    { author: "other", message: "hello", time: "17:56" },
  ]);
  const handleClick = () => {
    // dispatch(savechats(currentMessage).then(() => {
    // setMessageList(prevMessageList => ...prevMessageList,currentMessage)
  };
  //
  //
  //
  //
  // }
  // const sendMessage = async () => {
  //   if (currentMessage !== "") {
  //     const messageData = {
  //       room: room,
  //       author: username,
  //       message: currentMessage,
  //       time:
  //         new Date(Date.now()).getHours() +
  //         ":" +
  //         new Date(Date.now()).getMinutes(),
  //     };

  //     await socket.emit("send-message", messageData);
  //     setMessageList((lit) => [...list, messageData]);
  //     setCurrentMessage("");
  //   }
  // };

  // useEffect(() => {
  //   socket.on("receive-message", (data) => {
  //     console.log(data);
  //     setMessageList((prevlist) => [...prevlist, data]);
  //     console.log("messageList");
  //   });
  // }, [socket]);
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   };
  // }, [input]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Project Chat</p>
      </div>
      <div className="chat-body">
        <div className="message-container__box">
          {messageList.map((messageContent, index) => {
            return (
              <div
                key={index}
                className="message"
                id={messageContent.author === "you" ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          // onKeyPress={(event) => {
          //   event.key === "Enter" && sendMessage();
          // }}
        />
        <button>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
