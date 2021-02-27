import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import "./index.css";
import {useState} from "react";

const InputBar = (props) => {
  const [value, setValue] = useState('');
  return (
    <div className={"input-group"}>
      <TextField value={value} className={"input-bar"} size={"small"} label={props.label}
                 placeholder={props.placeholder} variant={"filled"}
                 onChange={(e) => setValue(e.target.value)}/>

      <Button className={"input-button"} variant={"contained"} color={"secondary"} size={"large"}
              onClick={() => props.send(value)}>Send</Button>
    </div>
  )
}

export default InputBar;