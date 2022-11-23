import React, { useState } from "react";
import "./style.css";
function Comment(props) {
  const [data, setData] = useState(props.comments);
  const [widths, setWidth] = useState(props.width);
  const [children, setChildren] = useState(props.comments.children);
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState(data.message);

  let v = [];
  const toggleReplies = () => {
    setChildren(props.comments);
    setDisplay((prevDisplay) => !prevDisplay);
    v = display ? children : [];
    console.log({ children });
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="coments__section">
      <div className="upperComment">
        <div className="comments">
          <div className="upper__coment">
            <div className="message">
              <img
                className="comment__img"
                src={`${window.location.origin}/images/profiles/avatar.jpg`}
              />
              <input
                type="text"
                value={message}
                onChange={(e) => handleChange(e)}
              />
            </div>
            2 days ago
          </div>

          <div
            className="message__btns"
            // onLoad={}
          >
            <div className="left__lower">
              {/* <div className="edit  btn">edit</div> */}
              <div className="repl  btn">Reply</div>
            </div>
            <div className="right__lower">
              <div className="like  btn">like</div>
              {data.children.length > 0 && (
                <div className="replies" onClick={toggleReplies}>
                  <span>{data.children.length}</span> Replies
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {data.children.length > 0 &&
        data.children.map((c, index) => {
          {
            console.log((index + 1) * 4);
          }
          return (
            <div key={index}>
              <div
                className="children"
                style={{ maxWidth: `${widths.toString()}%` }}
              >
                <Comment comments={c} width={widths} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Comment;
