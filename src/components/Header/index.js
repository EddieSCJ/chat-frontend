import AppBar from "@material-ui/core/AppBar";
import {Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import "./index.css";

const index = () => {
  return (
    <div>
      <AppBar position={"static"}>
        <Toolbar variant={"dense"} className={"toolbar"}>
          <Typography variant={"h6"}>
            Chat
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default index;