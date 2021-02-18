import "./index.css";
import NameInputBar from "../../components/NameInputBar/";

const StarterPage = () => {

  const change = (username, setUsername) => {
    setUsername(username);
  }

  const send = () => {
    console.log('sent')
  }

  return (
    <div className={"starter-page"}>
      <NameInputBar change={change} send={send}/>
    </div>
  )

}

export default StarterPage;