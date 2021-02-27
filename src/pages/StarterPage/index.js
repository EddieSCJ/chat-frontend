import "./index.css";
import InputBar from "../../components/InputBar/";
import React, {useEffect} from "react";
import { useHistory } from 'react-router-dom';
import socketIOService from "../../services/socketIOService";

const StarterPage = () => {
  socketIOService.connection();
  let history = useHistory();

  useEffect(() => {
    const username = localStorage.getItem('username');
    if(username) history.push('/chat')
  })

  const change = (username, setUsername) => {
    setUsername(username);
  }

  const renderChat = () => {
    localStorage.setItem('messageList', JSON.stringify([{username: "BOT", message: "Just send a message to start a conversartion"}]))
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