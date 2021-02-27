import './index.css'
import ChatContainer from './../../components/ChatContainer/';
import {useEffect} from "react";
import {useHistory} from "react-router-dom";


const Index = () => {
  const history = useHistory();
  const username = localStorage.getItem("username");
  if(!username) history.push('/')

  return (
    !!username && <div className={"chat-page"}>
      <ChatContainer/>
    </div>
  )
}

export default Index;