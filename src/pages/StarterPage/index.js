import "./index.css";
import InputBar from "../../components/InputBar/";
import React from "react";
import { useHistory } from 'react-router-dom';

const StarterPage = () => {
  let history = useHistory();

  const change = (username, setUsername) => {
    setUsername(username);
  }

  const renderChat = () => {
    localStorage.setItem('messageList', JSON.stringify([{username: "BOT", message: "Put your first message here"}]))
    history.push('/chat');
  }

  const send = (username) => {
    localStorage.setItem('username', username);
    renderChat();
  }

  return (
    <div className={"starter-page"}>
      <InputBar placeholder= "Enter your name here" label="Username" change={change} send={send}/>
    </div>
  )

}

export default StarterPage;