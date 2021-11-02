import React, { useEffect } from "react";
import "./MessagesPage.css";

const MessagesPage = (props) => {
  useEffect(() => {}, [props.message]);

  const clear = () => {
    props.setMessage([]);
  };

  return (
    <div>
      <h2>MessagesPage</h2>
      <button onClick={clear}>Clear Messages</button>
      <div>
        {props.message.map((message) => (
          <span>{message}</span>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
