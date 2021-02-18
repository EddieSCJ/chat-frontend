import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import "./index.css";
import {useState} from "react";

const NameInputBar = (props) => {
  const [username, setUsername] = useState('');
  return (
    <div className={"name-input-group"}>
      <TextField value={username} className={"name-input-bar"} size={"small"} label={"Username"}
                 placeholder={"Enter your name here"} variant={"filled"}
                 onChange={(e) => props.change(e.target.value, setUsername)}/>

      <Button className={"name-input-button"} variant={"contained"} color={"secondary"} size={"large"}
              onClick={() => props.send(username)}>Send</Button>
    </div>
  )
}

export default NameInputBar;