import React, { useState } from "react";
import classes from "./Chat.module.css";

function Chat() {
  const inputext = document.getElementById("inputext");
  const chatContainer = document.getElementById("chat");
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);
  const [openchat, setOpenchat] = useState(true);

  const desplazarScroll = () => {
    if (chatContainer.scrollHeight)
      chatContainer.scrollTop = chatContainer.scrollHeight;
  };
  const handleEnter = (e) => {
    e.key === "Enter" && handleSubmit();
  };

  const handleSubmit = (e) => {    
    e.preventDefault();
    if (text === "") return;
    setChat((historico) => [...historico, { user: "User", text: text }]);
    inputext.value = "";
    setText("")
    setLoading(true);
    fetch("http://localhost:8080/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: text,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setResponse(data.response);
        setChat((historico) => [
          ...historico,
          { user: "AI", text: data.response },
        ]);
        desplazarScroll();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const closeBox = () => {
    setOpenchat(!openchat)
  }

  return (
    <div className={openchat ? classes.box : classes.boxclosed}>
      <div className={classes.titulo}>
        <h2>Chat con el bot</h2>
        <button className={classes.minimize} onClick={closeBox}>{openchat ? '---' : '▲' }</button>
        {/* <button className={classes.close}>X</button> */}
      </div>
      <div className={openchat ? classes.chat : classes.boxclose} id="chat">
        {chat.map((c, i) => (
          <p key={i} className={c.user === "User" ? classes.linea : classes.user}>
             {c.text}
          </p>
        ))}
        {loading && <p className={classes.loading}>. . .</p>}
      </div>
      <form className={openchat ? classes.boxinput : classes.boxclose} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu mensaje"
          id="inputext"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onKeyDown={handleEnter}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Chat;
