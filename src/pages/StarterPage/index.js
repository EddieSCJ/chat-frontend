import "./index.css";
import NameInputBar from "../../components/NameInputBar/";
import ChatMessage from "./../../components/ChatMessage/";

const StarterPage = () => {

  const change = (username, setUsername) => {
    setUsername(username);
  }

  const send = (username, renderChat) => {
    localStorage.setItem('username', username);
    renderChat();
  }

  return (
    <div className={"starter-page"}>
      <NameInputBar change={change} send={send}/>
    </div>
  )

}

export default StarterPage;