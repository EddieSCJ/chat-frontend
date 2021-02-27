import React, {useEffect, useState} from "react";
import './index.css';
import ChatMessage from './../ChatMessage/';
import Header from './../Header/';
import InputBar from './../InputBar/'
import MessageService from '../../services/messageService';
import socketIOService from "../../services/socketIOService";
import {useHistory} from "react-router-dom";

let receiveMessages = () => {};

socketIOService.getSocket().on('message', socket => {
  receiveMessages(socket)
});

const ChatContainer = (props) => {


  const [messageList, setMessageList] = useState((JSON.parse(localStorage.getItem('messageList'))));
  receiveMessages = (value) => {
    let tmpMessageList = [...JSON.parse(localStorage.getItem('messageList'))];
    tmpMessageList.push(value);
    localStorage.setItem('messageList', JSON.stringify(tmpMessageList));
    setMessageList(tmpMessageList);
  }

  return (
    <div>
      <Header/>
      <div className={"container"}>
        {messageList.map((messageObject, index) => {
          return <ChatMessage username={messageObject.username} message={messageObject.message}
                              sequence={index % 2 == 0 ? 'odd' : 'even'}/>
        })}
      </div>
      <InputBar className={"input-bar"} label="Message" placeholder="Enter your message here"
                send={(value) => {
                  const username = localStorage.getItem('username');
                  MessageService.send(username, value);
                }}/>
    </div>
  )
}

export default ChatContainer;