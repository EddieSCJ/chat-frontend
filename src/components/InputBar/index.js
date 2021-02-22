import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import "./index.css";
import {useState} from "react";

const InputBar = (props) => {
  const [username, setUsername] = useState('');
  return (
    <div className={"input-group"}>
      <TextField value={username} className={"input-bar"} size={"small"} label={props.label}
                 placeholder={props.placeholder} variant={"filled"}
                 onChange={(e) => setUsername(e.target.value)}/>

      <Button className={"input-button"} variant={"contained"} color={"secondary"} size={"large"}
              onClick={() => props.send(username)}>Send</Button>
    </div>
  )
}

export default InputBar;