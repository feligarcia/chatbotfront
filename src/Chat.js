import React from "react";
import classes from "./Chat.module.css";

function Chat() {
  const handleSend = (e) => {
    const inputext = document.getElementById('inputext');
    const p = document.createElement('p');
    p.textContent = 'User' + ': ' + inputext.value;
    inputext.value = '';
    document.getElementById('chat').appendChild(p);
  };
  const handleEnter = (e) => {
    e.key === 'Enter' && handleSend();
  }

  return (
    <div className={classes.box}>
      <h2> Chatea con un increible AI</h2>
      <div className={classes.chat} id='chat'>
        <p>Juanes escribe algo para interactuar perro</p>
      </div>
      <div className={classes.boxinput}>
        <input type="text" placeholder="Escribe tu mensaje" id='inputext' onKeyDown={handleEnter}/>
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default Chat;
